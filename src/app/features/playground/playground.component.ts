import { Component, Input } from '@angular/core';
import { scan, filter } from 'rxjs/operators';
import { VirtualTimeScheduler, Subject, Observable, merge } from 'rxjs';

import { SubSink } from './../utils/subsink';
import { NextMarble, Marble, MarbleType, isNextMarble, CompleteMarble } from './marble';

@Component({
	selector: 'app-playground',
	templateUrl: './playground.component.html',
	styleUrls: ['./playground.component.less']
})
export class PlaygroundComponent<T extends number, E> {
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

	addInput(): void {
		const complete = new CompleteMarble(10);
		this.inputs = [...this.inputs, [complete]];
	}

	play(): void {
		const subjects = this.inputs.map(input => {
			const subject = new Subject<Marble<T, E>>();
			input.forEach(marble =>
				this.subs.sink =
				this.scheduler.schedule((marble: Marble) => subject.next(marble), marble.time, marble));
			return subject;
		});
		this.subs.sink = this.result.subscribe(x => console.log(x));
		this.subs.sink = subjects[0].pipe(filter(marble => !isNextMarble(marble) || (isNextMarble(marble) && marble.value < 3)))
			.pipe(
				scan((values: Marble<T, E>[], value: Marble<T, E>) => values = [...values, value], []))
			.subscribe(x => this.result.next(x));

		this.scheduler.flush();
		this.subs.unsubscribe();
	}

	private work(subject: Subject<Marble<T, E>>, marble: Marble<T, E>): void {
		switch (marble.type) {
			case MarbleType.NEXT:
				subject.next(marble);
				break;
			case MarbleType.ERROR:
				subject.error(marble.error);
				break;
			case MarbleType.COMPLETE:
				subject.complete();
				break;
			case MarbleType.SUBSCRIBE:
				subject.subscribe();
				break;
			case MarbleType.UNSUBSCRIBE:
				subject.unsubscribe();
				break;
		}
	}
}
