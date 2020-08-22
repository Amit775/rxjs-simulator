import { Component, OnInit } from '@angular/core';
import { PagesService } from 'src/app/core/pages.service';
import { Page } from 'src/app/shared/pages/page';

@Component({
	selector: 'app-side-nav',
	templateUrl: './side-nav.component.html',
	styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent implements OnInit {

	categories: Map<string, Page[]>;

	constructor(private pagesService: PagesService) { }

	ngOnInit(): void {
		this.categories = this.pagesService.pages;
	}
}
