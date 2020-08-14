interface BaseMarble {
	type: MarbleType;
	time: number;
}

export class NextMarble<T> implements BaseMarble {
	public type: MarbleType.NEXT = MarbleType.NEXT;
	constructor(public time: number, public value: T, public index: number) { }
}

export class ErrorMarble<E> implements BaseMarble {
	public type: MarbleType.ERROR = MarbleType.ERROR;
	constructor(public time: number, public error: E) { }
}

export class CompleteMarble implements BaseMarble {
	public type: MarbleType.COMPLETE = MarbleType.COMPLETE;
	constructor(public time: number) { }
}

export enum MarbleType { NEXT, ERROR, COMPLETE }

export type Marble<T = any, E = any> = NextMarble<T> | ErrorMarble<E> | CompleteMarble;

export function isNextMarble<T>(marble: Marble): marble is NextMarble<T> {
	return marble.type === MarbleType.NEXT;
}

export function isErrorMarble<E>(marble: Marble): marble is ErrorMarble<E> {
	return marble.type === MarbleType.ERROR;
}

export function isCompleteMarble(marble: Marble): marble is CompleteMarble {
	return marble.type === MarbleType.COMPLETE;
}