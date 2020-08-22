import { Pipe, PipeTransform } from '@angular/core';
import { Page } from 'src/app/shared/pages/page';

@Pipe({
	name: 'filterCategory'
})
export class FilterCategoryPipe implements PipeTransform {
	transform(categories: Map<string, Page[]>, query: string): Map<string, Page[]> {
		if (!query) {
			return categories;
		}

		const result = new Map<string, Page[]>();
		categories.forEach((pages: Page[], category: string) => {
			const filteredPages = pages.filter(page => page.name.includes(query));
			if (filteredPages.length > 0) result.set(category, filteredPages);
		})
		return result.size > 0 ? result : null;
	}
}
