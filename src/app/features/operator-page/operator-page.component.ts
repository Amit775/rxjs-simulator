import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-operator-page',
	templateUrl: './operator-page.component.html',
	styleUrls: ['./operator-page.component.less']
})
export class OperatorPageComponent implements OnInit {

	operator$: Observable<string>;

	constructor(private router: ActivatedRoute) { }

	ngOnInit(): void {
		this.operator$ = this.router.params.pipe(map(params => params.id));
	}
}
