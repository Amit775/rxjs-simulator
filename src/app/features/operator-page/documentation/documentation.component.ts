import { Component, Input } from '@angular/core';
import { Page } from 'src/app/shared/pages/page';

@Component({
	selector: 'app-operator-documentation',
	templateUrl: './documentation.component.html',
	styleUrls: ['./documentation.component.less']
})
export class DocumentationComponent {

	imageSrc: string;
	@Input() set page(value: Page) {
		this.imageSrc = `https://rxjs-dev.firebaseapp.com/assets/images/marble-diagrams/${value.name}.png`;
	}
}
