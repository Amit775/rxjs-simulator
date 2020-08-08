import { Marble } from './playground.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'displayMarbles'
})
export class displayMarblesPipe implements PipeTransform {
	transform(input: Marble<number>[]): string {
		if (!input) return '';

		const sorted = input.sort((a: Marble, b: Marble) => a.time - b.time);
		const grouped: Map<number, Marble[]> = sorted.reduce((map: Map<number, Marble<number>[]>, marble: Marble<number>) =>
			map.set(marble.time, [...map.get(marble.time) || [], marble]), new Map());
		const arrayed = Array.from(grouped);
		const mapped = arrayed.map((entry, index) => {
			const [time, valuesAtTime] = [entry[0], entry[1].map(marble => marble.value)];
			const diff = index === 0 ? time : time - arrayed[index - 1][0] - 1;
			const currentValues = valuesAtTime.length === 1 ? valuesAtTime[0] : `(${valuesAtTime.join(' ')})`
			return `${Array(diff).fill('- ').join('')}${currentValues}`;
		})
		const joined = mapped.join(' ');
		return joined;
	}
}
