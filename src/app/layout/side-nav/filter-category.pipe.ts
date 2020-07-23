import { Pipe, PipeTransform } from '@angular/core';
import { NavBarCategory } from 'src/app/shared/models/nav-bar';

@Pipe({
	name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {
	transform(categories: NavBarCategory[], query: string): NavBarCategory[] {
		if (!query) {
			return categories;
		}

		const result = categories.map(category => {
			return {
				...category,
				items: category.items.filter(item =>
					item.display.toLowerCase().includes(query.toLowerCase()))
			};
		}).filter(category => category.items.length > 0);
		return result.length > 0 ? result : null;
	}
}
