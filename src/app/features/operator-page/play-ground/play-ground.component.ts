import { Component, Input } from '@angular/core';
import { scan, tap } from 'rxjs/operators';
import { VirtualTimeScheduler, Subject, Observable, Subscriber, OperatorFunction, merge, SubscriptionLike, concat } from 'rxjs';
import { SubSink } from '../../utils/subsink';
import { NextMarble, Marble, MarbleType, CompleteMarble, ErrorMarble } from './marble';

@Component({
	selector: 'app-operator-playground',
	templateUrl: './play-ground.component.html',
	styleUrls: ['./play-ground.component.less']
})
export class PlayGroundComponent<T extends number, E> {
	@Input() multipleInputs: boolean = true;

	subs = new SubSink();
	inputs: Marble<T, E>[][] = []
	scheduler = new VirtualTimeScheduler();
	result = new Subject<Marble<T, E>[]>()
	result$: Observable<Marble<T, E>[]> = this.result.asObservable();

	addMarbleTo(index: number, time: number, value: T): void {
		if (index < 0 || index >= this.inputs.length) return;
		const marble = new NextMarble<T>(time, value, this.inputs[index].length);
		this.inputs[index] = [...this.inputs[index], marble];
	}

	addInput(completeTime: number, errorTime: number): void {
		const error = errorTime ? new ErrorMarble<E>(errorTime, <E><unknown>'error') : undefined;
		const complete = new CompleteMarble(completeTime);
		this.inputs = [...this.inputs, [complete, ...error ? [error] : []]];
	}

	play(): void {
		const subjects = this.inputs.map((input, index) => {
			const subject = new Subject<T>();
			input.forEach(marble =>
				this.subs.sink =
				this.scheduler.schedule((marble: Marble) => this.work(subject, marble), marble.time, marble));
			return subject;
		});
		this.subs.sink = concat(...subjects)
			.pipe(
				toMarble(this.scheduler),
				scan((values: Marble<T, E>[], value: Marble<T, E>) => values = [...values, value], []))
			.subscribe(marble => this.result.next(marble));

		this.scheduler.flush();
		this.scheduler.index
		this.scheduler.frame = 0;
		this.subs.unsubscribe();
	}

	private work(subject: Subject<T>, marble: Marble<T, E>): void {
		switch (marble.type) {
			case MarbleType.NEXT:
				subject.next(marble.value);
				break;
			case MarbleType.ERROR:
				subject.error(marble.error);
				break;
			case MarbleType.COMPLETE:
				subject.complete();
				break;
		}
	}
}


function toMarble<T, E>(scheduler: VirtualTimeScheduler): OperatorFunction<T, Marble<T, E>> {
	return (source: Observable<T>): Observable<Marble<T, E>> => {
		let index: number = 0;
		return new Observable((subscriber: Subscriber<Marble<T, E>>): SubscriptionLike => {
			return source.subscribe({
				next: (value: T) => subscriber.next(new NextMarble(scheduler.now(), value, index++)),
				error: (error: E) => subscriber.next(new ErrorMarble(scheduler.now(), error)),
				complete: () => subscriber.next(new CompleteMarble(scheduler.now()))
			});
		});
	};
}