import { PagesService } from './../../core/pages.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Page } from 'src/app/shared/pages/page';

import { startCase, camelCase } from 'lodash';

@Component({
	selector: 'app-operator-page',
	templateUrl: './operator-page.component.html',
	styleUrls: ['./operator-page.component.less']
})
export class OperatorPageComponent implements OnInit {

	page$: Observable<Page>;
	operator$: Observable<string>;

	constructor(private router: ActivatedRoute, private pagesService: PagesService) { }

	ngOnInit(): void {
		this.page$ = this.router.params.pipe(
			map(param => this.pagesService.pages.get(
				startCase(camelCase(param.category))
			).find(page => page.name === param.name))
		);
		this.operator$ = this.page$.pipe(map(page => page.name));
	}
}
