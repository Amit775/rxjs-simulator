import { NavBarCategory } from '../models/nav-bar';

export const NAV_BAR_ITEMS: NavBarCategory[] = [
	{
		display: 'CREATION OBSERVABLES',
		items: [
			{
				display: 'from',
				route: 'from'
			},
			{
				display: 'interval',
				route: 'interval'
			},
			{
				display: 'of',
				route: 'of'
			},
			{
				display: 'timer',
				route: 'timer'
			}
		]
	},
	{
		display: 'CONDITIONAL OPERATORS',
		items: [
			{
				display: 'defaultIfEmpty',
				route: 'defaultIfEmpty'
			},
			{
				display: 'every',
				route: 'every'
			},
			{
				display: 'sequenceEqual',
				route: 'sequenceEqual'
			}
		]
	},
	{
		display: 'COMBINATION OPERATORS',
		items: [
			{
				display: 'combineLatest',
				route: 'combineLatest'
			},
			{
				display: 'concat',
				route: 'concat'
			},
			{
				display: 'merge',
				route: 'merge'
			},
			{
				display: 'race',
				route: 'race'
			},
			{
				display: 'startWith',
				route: 'startWith'
			},
			{
				display: 'withLatestFrom',
				route: 'withLatestFrom'
			},
			{
				display: 'zip',
				route: 'zip'
			}
		]
	},
	{
		display: 'FILTERING OPERATORS',
		items: [
			{
				display: 'debounceTime',
				route: 'debounceTime'
			},
			{
				display: 'debounce',
				route: 'debounce'
			},
			{
				display: 'distinct',
				route: 'distinct'
			},
			{
				display: 'distinctUntilChanged',
				route: 'distinctUntilChanged'
			},
			{
				display: 'elementAt',
				route: 'elementAt'
			},
			{
				display: 'filter',
				route: 'filter'
			},
			{
				display: 'find',
				route: 'find'
			},
			{
				display: 'findIndex',
				route: 'findIndex'
			},
			{
				display: 'first',
				route: 'first'
			},
			{
				display: 'ignoreElements',
				route: 'ignoreElements'
			},
			{
				display: 'last',
				route: 'last'
			},
			{
				display: 'sample',
				route: 'sample'
			},
			{
				display: 'skip',
				route: 'skip'
			},
			{
				display: 'skipUntil',
				route: 'skipUntil'
			},
			{
				display: 'skipWhile',
				route: 'skipWhile'
			},
			{
				display: 'take',
				route: 'take'
			},
			{
				display: 'takeLast',
				route: 'takeLast'
			},
			{
				display: 'takeUntil',
				route: 'takeUntil'
			},
			{
				display: 'takeWhile',
				route: 'takeWhile'
			},
			{
				display: 'throttle',
				route: 'throttle'
			},
			{
				display: 'throttleTime',
				route: 'throttleTime'
			}
		]
	},
	{
		display: 'MATHEMATICAL OPERATORS',
		items: [
			{
				display: 'count',
				route: 'count'
			},
			{
				display: 'max',
				route: 'max'
			},
			{
				display: 'min',
				route: 'min'
			},
			{
				display: 'reduce',
				route: 'reduce'
			}
		]
	},
	{
		display: 'TRANSFORMATION OPERATORS',
		items: [
			{
				display: 'buffer',
				route: 'buffer'
			},
			{
				display: 'bufferCount',
				route: 'bufferCount'
			},
			{
				display: 'bufferTime',
				route: 'bufferTime'
			},
			{
				display: 'bufferToggle',
				route: 'bufferToggle'
			},
			{
				display: 'bufferWhen',
				route: 'bufferWhen'
			},
			{
				display: 'concatMap',
				route: 'concatMap'
			},
			{
				display: 'concatMapTo',
				route: 'concatMapTo'
			},
			{
				display: 'bufferToggle',
				route: 'bufferToggle'
			},
			{
				display: 'map',
				route: 'map'
			},
			{
				display: 'mapTo',
				route: 'mapTo'
			},
			{
				display: 'mergeMap',
				route: 'mergeMap'
			},
			{
				display: 'mergeMapTo',
				route: 'mergeMapTo'
			},
			{
				display: 'pairwise',
				route: 'pairwise'
			},
			{
				display: 'pluck',
				route: 'pluck'
			},
			{
				display: 'repeat',
				route: 'repeat'
			},
			{
				display: 'scan',
				route: 'scan'
			},
			{
				display: 'switchMap',
				route: 'switchMap'
			},
			{
				display: 'switchMapTo',
				route: 'switchMapTo'
			}
		]
	},
	{
		display: 'UTILITY OPERATORS',
		items: [
			{
				display: 'delay',
				route: 'delay'
			},
			{
				display: 'delayWhen',
				route: 'delayWhen'
			}
		]
	}
];
