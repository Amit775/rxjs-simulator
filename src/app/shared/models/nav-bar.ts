import { Observable } from 'rxjs';

export interface NavBarNode {
	display: string;
}

export interface NavBarCategory extends NavBarNode {
	items: NavBarItem[];
}

export interface NavBarItem extends NavBarNode {
	route: string;
	item?: OperatorItem;
}

export interface OperatorItem {
	inputs: InputElement[][];
	arguments: any[];
	apply: (a: any[]) => Observable<any>;
}

export interface InputElement {
	time: number;
	value: string | number;
}
