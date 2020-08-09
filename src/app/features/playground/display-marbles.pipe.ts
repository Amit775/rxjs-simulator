import { Pipe, PipeTransform } from '@angular/core';

import { Marble, MarbleType } from './marble';

@Pipe({
	name: 'displayMarbles'
})
export class DisplayMarblesPipe<T, E> implements PipeTransform {
	transform(input: Marble<T, E>[]): string {
		if (!input) return '';

		const sorted = input.sort((a: Marble, b: Marble) => a.time - b.time);

		const grouped: Map<number, Marble[]> = sorted.reduce((map: Map<number, Marble[]>, marble: Marble) =>
			map.set(marble.time, [...map.get(marble.time) || [], marble]), new Map());

		const arrayed = Array.from(grouped);

		const mapped = arrayed.map((entry, index) => {

			const [time, valuesAtTime] = [entry[0], entry[1].map((marble: Marble) => this.display(marble))];

			const diff = index === 0 ? time : time - arrayed[index - 1][0] - 1;

			const currentValues = valuesAtTime.length === 1 ? valuesAtTime[0] : `(${valuesAtTime.join(' ')})`

			return `${Array(diff).fill('- ').join('')}${currentValues}`;
		});

		const joined = mapped.join(' ');

		return joined;
	}

	private display(marble: Marble): string {
		switch (marble.type) {
			case MarbleType.NEXT:
				return `${marble.value}`;
			case MarbleType.ERROR:
				return '#';
			case MarbleType.COMPLETE:
				return '|';
			case MarbleType.SUBSCRIBE:
				return '^';
			case MarbleType.UNSUBSCRIBE:
				return '!';
		}
	}
}
