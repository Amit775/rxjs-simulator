import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-operator-documentation',
	templateUrl: './documentation.component.html',
	styleUrls: ['./documentation.component.less']
})
export class DocumentationComponent {

	imageSrc: string;
	@Input() set operator(value: string) {
		this.imageSrc = `https://rxjs-dev.firebaseapp.com/assets/images/marble-diagrams/${value}.png`;
	}
}
