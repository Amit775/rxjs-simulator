import { Component, OnInit } from '@angular/core';
import { NAV_BAR_ITEMS } from 'src/app/shared/const/nav-bar-items';
import { NavBarCategory } from 'src/app/shared/models/nav-bar';

@Component({
	selector: 'app-side-nav',
	templateUrl: './side-nav.component.html',
	styleUrls: ['./side-nav.component.less']
})
export class SideNavComponent implements OnInit {

	categories: NavBarCategory[];
	constructor() { }

	ngOnInit(): void {
		this.categories = NAV_BAR_ITEMS;
	}
}
