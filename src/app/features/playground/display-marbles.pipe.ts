import { Marble } from './playground.component';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'displayMarbles'
})
export class displayMarblesPipe implements PipeTransform {
	transform(input: Marble<number>[]): string {
		if (!input) return '';
		return input.sort((a, b) => a.time - b.time)
			.map((current: Marble<number>, index: number, array: Marble<number>[]) => {
				const diff = index === 0 ? current.time : current.time - array[index - 1].time;
				return `${Array(diff).fill('-')}${current.value}`
			}).join();
	}
}