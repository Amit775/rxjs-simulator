import { Component, Input } from '@angular/core';
import { Page } from 'src/app/shared/pages/page';

@Component({
	selector: 'app-operator-comparison',
	templateUrl: './comparison.component.html',
	styleUrls: ['./comparison.component.less']
})
export class ComparisonComponent {
	@Input() page: Page;
}
