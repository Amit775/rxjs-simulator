import { Component } from '@angular/core';

@Component({
	selector: 'app-playground',
	templateUrl: './playground.component.html',
	styleUrls: ['./playground.component.less']
})
export class PlaygroundComponent {


}

export interface Marble<T> {
	value: T;
	time: number;
}