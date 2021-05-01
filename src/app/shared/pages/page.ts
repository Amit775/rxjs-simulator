import { OperatorFunction, Observable, UnaryFunction } from 'rxjs';

export abstract class Page {
	abstract name: string;
	abstract category: string;
}

export abstract class OperatorPage extends Page {
	abstract operator: (...args: any[]) => OperatorFunction<any, any>;
}

export abstract class CreatorPage extends Page {
	abstract creator: ObservableCreator
}

export abstract class CreatorCallbackPage extends Page {
	abstract creator: (...args: any) => ObservableCreator;
}

export abstract class CreatorMultiplePage extends Page {
	abstract creator: (...args: any) => Observable<any>[]
}

export abstract class OperatorMultiplePage extends Page {
	abstract operator: (...args: any[]) => UnaryFunction<Observable<any>, Observable<any>[]>
}

export interface Predictable<T = any> extends Page {
	predicate: (value: T, index: number) => boolean;
}

export function isPredictable(page: Page): page is Predictable {
	return 'predicate' in page;
}

type ObservableCreator = (...args: any[]) => Observable<any>
