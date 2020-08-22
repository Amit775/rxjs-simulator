import { Unsubscribable } from 'rxjs';

const isFunction = (fn: any) => typeof fn === 'function';
/**
 * Subscription sink that holds Observable subscriptions
 * until you call unsubscribe on it in ngOnDestroy.
 */
export class SubSink implements Unsubscribable {

	protected _subs: Unsubscribable[] = [];

	/**
	 * Add subscriptions to the tracked subscriptions
	 * @example
	 *  this.subs.add(observable$.subscribe(...));
	 */
	add(...subscriptions: Unsubscribable[]) {
		this._subs = this._subs.concat(subscriptions);
	}

	/**
	 * Assign subscription to this sink to add it to the tracked subscriptions
	 * @example
	 *  this.subs.sink = observable$.subscribe(...);
	 */
	set sink(subscription: Unsubscribable) {
		this._subs.push(subscription);
	}

	/**
	 * Unsubscribe to all subscriptions in ngOnDestroy()
	 * @example
	 *   ngOnDestroy() {
	 *     this.subs.unsubscribe();
	 *   }
	 */
	unsubscribe() {
		this._subs.forEach(sub => sub && isFunction(sub.unsubscribe) && sub.unsubscribe());
		this._subs = [];
	}
}
