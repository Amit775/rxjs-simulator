import { Component, OnInit } from '@angular/core';
import { PagesService } from './core/pages.service';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
	title = 'rxjs-simulator';

	constructor(private pageService: PagesService) { }

	ngOnInit(): void {
		this.pageService.ngOnInit();
	}
}
