export interface NavBarNode {
	display: string;
}

export interface NavBarCategory extends NavBarNode {
	items: NavBarItem[];
}

export interface NavBarItem extends NavBarNode {
	route: string;
	shit?: any;
}