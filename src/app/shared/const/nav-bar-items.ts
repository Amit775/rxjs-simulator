import { NavBarCategory } from '../models/nav-bar';

export const NAV_BAR_ITEMS: NavBarCategory[] = [
	{
		display: 'Creation Operators', items: [
			{ display: 'ajax', route: 'ajax' },
			{ display: 'bindCallback', route: 'bindCallback' },
			{ display: 'bindNodeCallback', route: 'bindNodeCallback' },
			{ display: 'defer', route: 'defer' },
			{ display: 'empty', route: 'empty' },
			{ display: 'from', route: 'from' },
			{ display: 'fromEvent', route: 'fromEvent' },
			{ display: 'fromEventPattern', route: 'fromEventPattern' },
			{ display: 'generate', route: 'generate' },
			{ display: 'interval', route: 'interval' },
			{ display: 'of', route: 'of' },
			{ display: 'range', route: 'range' },
			{ display: 'throwError', route: 'throwError' },
			{ display: 'timer', route: 'timer' },
			{ display: 'iif', route: 'iif' },
		]
	},
	{
		display: 'Join Creation Operators', items: [
			{ display: 'combineLatest', route: 'combineLatest' },
			{ display: 'concat', route: 'concat' },
			{ display: 'forkJoin', route: 'forkJoin' },
			{ display: 'merge', route: 'merge' },
			{ display: 'partition', route: 'partition' },
			{ display: 'race', route: 'race' },
			{ display: 'zip', route: 'zip' },
		]
	},
	{
		display: 'Transformation Operators', items: [
			{ display: 'buffer', route: 'buffer' },
			{ display: 'bufferCount', route: 'bufferCount' },
			{ display: 'bufferTime', route: 'bufferTime' },
			{ display: 'bufferToggle', route: 'bufferToggle' },
			{ display: 'bufferWhen', route: 'bufferWhen' },
			{ display: 'concatMap', route: 'concatMap' },
			{ display: 'concatMapTo', route: 'concatMapTo' },
			{ display: 'exhaust', route: 'exhaust' },
			{ display: 'exhaustMap', route: 'exhaustMap' },
			{ display: 'expand', route: 'expand' },
			{ display: 'groupBy', route: 'groupBy' },
			{ display: 'map', route: 'map' },
			{ display: 'mapTo', route: 'mapTo' },
			{ display: 'mergeMap', route: 'mergeMap' },
			{ display: 'mergeMapTo', route: 'mergeMapTo' },
			{ display: 'mergeScan', route: 'mergeScan' },
			{ display: 'pairwise', route: 'pairwise' },
			{ display: 'partition', route: 'partition' },
			{ display: 'pluck', route: 'pluck' },
			{ display: 'scan', route: 'scan' },
			{ display: 'switchMap', route: 'switchMap' },
			{ display: 'switchMapTo', route: 'switchMapTo' },
			{ display: 'window', route: 'window' },
			{ display: 'windowCount', route: 'windowCount' },
			{ display: 'windowTime', route: 'windowTime' },
			{ display: 'windowToggle', route: 'windowToggle' },
			{ display: 'windowWhen', route: 'windowWhen' },
		]
	},
	{
		display: 'Filtering Operators', items: [
			{ display: 'audit', route: 'audit' },
			{ display: 'auditTime', route: 'auditTime' },
			{ display: 'debounce', route: 'debounce' },
			{ display: 'debounceTime', route: 'debounceTime' },
			{ display: 'distinct', route: 'distinct' },
			{ display: 'distinctUntilChanged', route: 'distinctUntilChanged' },
			{ display: 'distinctUntilKeyChanged', route: 'distinctUntilKeyChanged' },
			{ display: 'elementAt', route: 'elementAt' },
			{ display: 'filter', route: 'filter' },
			{ display: 'first', route: 'first' },
			{ display: 'ignoreElements', route: 'ignoreElements' },
			{ display: 'last', route: 'last' },
			{ display: 'sample', route: 'sample' },
			{ display: 'sampleTime', route: 'sampleTime' },
			{ display: 'single', route: 'single' },
			{ display: 'skip', route: 'skip' },
			{ display: 'skipLast', route: 'skipLast' },
			{ display: 'skipUntil', route: 'skipUntil' },
			{ display: 'skipWhile', route: 'skipWhile' },
			{ display: 'take', route: 'take' },
			{ display: 'takeLast', route: 'takeLast' },
			{ display: 'takeUntil', route: 'takeUntil' },
			{ display: 'takeWhile', route: 'takeWhile' },
			{ display: 'throttle', route: 'throttle' },
			{ display: 'throttleTime', route: 'throttleTime' },
		]
	},
	{
		display: 'Join Operators', items: [
			{ display: 'combineAll', route: 'combineAll' },
			{ display: 'concatAll', route: 'concatAll' },
			{ display: 'exhaust', route: 'exhaust' },
			{ display: 'mergeAll', route: 'mergeAll' },
			{ display: 'startWith', route: 'startWith' },
			{ display: 'withLatestFrom', route: 'withLatestFrom' },
		]
	},
	{
		display: 'Multicasting Operators', items: [
			{ display: 'multicast', route: 'multicast' },
			{ display: 'publish', route: 'publish' },
			{ display: 'publishBehavior', route: 'publishBehavior' },
			{ display: 'publishLast', route: 'publishLast' },
			{ display: 'publishReplay', route: 'publishReplay' },
			{ display: 'share', route: 'share' },
		]
	},
	{
		display: 'Error Handling Operators', items: [
			{ display: 'catchError', route: 'catchError' },
			{ display: 'retry', route: 'retry' },
			{ display: 'retryWhen', route: 'retryWhen' },
		]
	},
	{
		display: 'Utility Operators', items: [
			{ display: 'tap', route: 'tap' },
			{ display: 'delay', route: 'delay' },
			{ display: 'delayWhen', route: 'delayWhen' },
			{ display: 'dematerialize', route: 'dematerialize' },
			{ display: 'materialize', route: 'materialize' },
			{ display: 'observeOn', route: 'observeOn' },
			{ display: 'subscribeOn', route: 'subscribeOn' },
			{ display: 'timeInterval', route: 'timeInterval' },
			{ display: 'timestamp', route: 'timestamp' },
			{ display: 'timeout', route: 'timeout' },
			{ display: 'timeoutWith', route: 'timeoutWith' },
			{ display: 'toArray', route: 'toArray' },
		]
	},
	{
		display: 'Conditional and Boolean Operators', items: [
			{ display: 'defaultIfEmpty', route: 'defaultIfEmpty' },
			{ display: 'every', route: 'every' },
			{ display: 'find', route: 'find' },
			{ display: 'findIndex', route: 'findIndex' },
			{ display: 'isEmpty', route: 'isEmpty' },
		]
	},
	{
		display: 'Mathematical and Aggregate Operators', items: [
			{ display: 'count', route: 'count' },
			{ display: 'max', route: 'max' },
			{ display: 'min', route: 'min' },
			{ display: 'reduce', route: 'reduce' },
		]
	}
];
