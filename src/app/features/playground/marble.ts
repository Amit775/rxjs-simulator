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

export class SubscribeMarble implements BaseMarble {
	public type: MarbleType.SUBSCRIBE = MarbleType.SUBSCRIBE;
	constructor(public time: number) { }
}

export class UnsubscribeMarble implements BaseMarble {
	public type: MarbleType.UNSUBSCRIBE = MarbleType.UNSUBSCRIBE;
	constructor(public time: number) { }
}

export enum MarbleType { NEXT, ERROR, COMPLETE, SUBSCRIBE, UNSUBSCRIBE }

export type Marble<T = any, E = any> = NextMarble<T> | ErrorMarble<E> | CompleteMarble | SubscribeMarble | UnsubscribeMarble;

export function isNextMarble<T>(marble: Marble): marble is NextMarble<T> {
	return marble.type === MarbleType.NEXT;
}