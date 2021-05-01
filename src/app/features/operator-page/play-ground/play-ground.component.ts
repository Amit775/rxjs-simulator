import { Predictable, isPredictable } from './../../../shared/pages/page';
import { Component, Input, OnInit, OnChanges } from '@angular/core';

import { scan } from 'rxjs/operators';
import { VirtualTimeScheduler, Subject, Observable, Subscriber, OperatorFunction, SubscriptionLike, concat, merge } from 'rxjs';

import { SubSink } from 'src/app/shared/utils/subsink';
import { NextMarble, Marble, MarbleType, CompleteMarble, ErrorMarble } from './marble';
import { Page, CreatorPage, OperatorPage } from 'src/app/shared/pages/page';

@Component({
	selector: 'app-operator-playground',
	templateUrl: './play-ground.component.html',
	styleUrls: ['./play-ground.component.less']
})
export class PlayGroundComponent<T, E> implements OnChanges {
	@Input() page: Page;

	subs = new SubSink();
	inputs: Marble<T, E>[][] = []
	scheduler = new VirtualTimeScheduler();
	result = new Subject<Marble<T, E>[]>()
	result$: Observable<Marble<T, E>[]> = this.result.asObservable();


	ngOnChanges(): void {
		if (this.page instanceof OperatorPage) {
			const { operator } = this.page;
			console.log(operator);
		}

		if (isPredictable(this.page)) {
			console.log('predictable');
		}
	}
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


		this.subs.sink = this.act(subjects)
			.pipe(
				toMarble(this.scheduler),
				scan((values: Marble<T, E>[], value: Marble<T, E>) => values = [...values, value], []))
			.subscribe(marble => this.result.next(marble));

		this.scheduler.flush();
		this.scheduler.index
		this.scheduler.frame = 0;
		this.subs.unsubscribe();
	}

	public get isMultipleInput(): boolean {
		return true;
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

	private act(subjects: Subject<T>[]): Observable<T> {
		if (this.page instanceof CreatorPage) {
			return this.page.creator(...subjects);
		}

		if (this.page instanceof OperatorPage) {
			const [source, ...rest] = subjects;
			return source.pipe(this.page.operator(rest));
		}

		return merge(...subjects);
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