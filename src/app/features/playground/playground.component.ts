import { SubSink } from './../utils/subsink';
import { VirtualTimeScheduler, Subject, Observable, merge } from 'rxjs';
import { Component } from '@angular/core';
import { scan, filter } from 'rxjs/operators';

@Component({
	selector: 'app-playground',
	templateUrl: './playground.component.html',
	styleUrls: ['./playground.component.less']
})
export class PlaygroundComponent {
	subs = new SubSink();
	inputs: Marble[][] = []
	scheduler = new VirtualTimeScheduler();
	result = new Subject<Marble[]>()
	result$: Observable<Marble[]> = this.result.asObservable();

	addMarbleTo(index: number, marble: Marble): void {
		if (index < 0 || index >= this.inputs.length) return;
		this.inputs[index] = [...this.inputs[index], marble];
		console.log(index, marble);
	}

	addInput(): void {
		this.inputs = [...this.inputs, []];
	}

	marble<T>(value: T, time: number): Marble<T> {
		return { value, time } as Marble<T>
	}

	play(): void {
		const subjects = this.inputs.map(input => {
			const subject = new Subject<Marble>();
			input.forEach(marble =>
				this.subs.sink =
				this.scheduler.schedule((state: Marble) => subject.next(state), marble.time, marble));
			return subject;
		});

		this.subs.sink = subjects[0].pipe(filter(m => m.value < 3))
			.pipe(
				scan((values: Marble[], value: Marble) => values = [...values, value], []))
			.subscribe(x => this.result.next(x));
		this.scheduler.flush();
		this.subs.unsubscribe();
	}
}

export interface Marble<T = number> {
	value: T;
	index: number;
	time: number;
	type: MarbleType;
}

export enum MarbleType { NEXT, ERROR, COMPLETE, SUBSCRIBE, UNSUBSCRIBE }
