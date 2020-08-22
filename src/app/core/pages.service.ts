import { Injectable, OnInit } from '@angular/core';

import { Page } from '../shared/pages/page';

import { kebabCase, startCase, camelCase } from 'lodash';

import { DefaultIfEmptyPage, EveryPage, FindPage, FindIndexPage, IsEmptyPage } from '../shared/pages/conditional-and-boolean-operators';
import { AjaxPage, BindCallbackPage, BindNodeCallbackPage, DeferPage, EmptyPage, FromPage, FromEventPage, FromEventPatternPage, GeneratePage, IifPage, IntervalPage, OfPage, RangePage, ThrowErrorPage, TimerPage } from './../shared/pages/creation-operators';
import { CatchErrorPage, RetryPage, RetryWhenPage } from './../shared/pages/error-handling-operators';
import { AuditPage, AuditTimePage, DebouncePage, DebounceTimePage, DistinctPage, DistinctUntilChangedPage, DistinctUntilKeyChangedPage, ElementAtPage, FilterPage, FirstPage, IgnoreElementsPage, LastPage, SamplePage, SampleTimePage, SinglePage, SkipPage, SkipLastPage, SkipUntilPage, SkipWhilePage, TakePage, TakeLastPage, TakeUntilPage, TakeWhilePage, ThrottlePage, ThrottleTimePage } from './../shared/pages/filtering-operators';
import { CombineLatestPage, ConcatPage, ForkJoinPage, MergePage, PartitionPage, RacePage, ZipPage } from './../shared/pages/join-creation-operators';
import { CombineAllPage, ConcatAllPage, ExhaustPage, MergeAllPage, StartWithPage, WithLatestFromPage } from './../shared/pages/join-operators';
import { CountPage, MaxPage, MinPage, ReducePage } from './../shared/pages/mathematical-and-aggregate-operators';
import { MulticastPage, PublishPage, PublishBehaviorPage, PublishLastPage, PublishReplayPage, SharePage } from './../shared/pages/multicasting-operators';
import { BufferPage, BufferCountPage, BufferTimePage, BufferTogglePage, BufferWhenPage, ConcatMapPage, ConcatMapToPage, ExhaustMapPage, ExpandPage, GroupByPage, MapPage, MapToPage, MergeMapPage, MergeMapToPage, MergeScanPage, PairwisePage, PluckPage, ScanPage, SwitchMapPage, SwitchMapToPage, WindowPage, WindowCountPage, WindowTogglePage, WindowWhenPage } from './../shared/pages/transformation-operators';
import { DelayPage, DelayWhenPage, DematerializePage, MaterializePage, ObserveOnPage, SubscribeOnPage, TapPage, TimeIntervalPage, TimeoutPage, TimeoutWithPage, TimestampPage, ToArrayPage } from './../shared/pages/utility-operators';


@Injectable({ providedIn: 'root' })
export class PagesService implements OnInit {

	pages: Map<string, Page[]>;
	ngOnInit(): void {
		this.pages = new Map();
		[
			new DefaultIfEmptyPage(),
			new EveryPage(),
			new FindPage(),
			new FindIndexPage(),
			new IsEmptyPage(),
			new AjaxPage(),
			new BindCallbackPage(),
			new BindNodeCallbackPage(),
			new DeferPage(),
			new EmptyPage(),
			new FromPage(),
			new FromEventPage(),
			new FromEventPatternPage(),
			new GeneratePage(),
			new IifPage(),
			new IntervalPage(),
			new OfPage(),
			new RangePage(),
			new ThrowErrorPage(),
			new TimerPage(),
			new CatchErrorPage(),
			new RetryPage(),
			new RetryWhenPage(),
			new AuditPage(),
			new AuditTimePage(),
			new DebouncePage(),
			new DebounceTimePage(),
			new DistinctPage(),
			new DistinctUntilChangedPage(),
			new DistinctUntilKeyChangedPage(),
			new ElementAtPage(),
			new FilterPage(),
			new FirstPage(),
			new IgnoreElementsPage(),
			new LastPage(),
			new SamplePage(),
			new SampleTimePage(),
			new SinglePage(),
			new SkipPage(),
			new SkipLastPage(),
			new SkipUntilPage(),
			new SkipWhilePage(),
			new TakePage(),
			new TakeLastPage(),
			new TakeUntilPage(),
			new TakeWhilePage(),
			new ThrottlePage(),
			new ThrottleTimePage(),
			new CombineLatestPage(),
			new ConcatPage(),
			new ForkJoinPage(),
			new MergePage(),
			new PartitionPage(),
			new RacePage(),
			new ZipPage(),
			new CombineAllPage(),
			new ConcatAllPage(),
			new ExhaustPage(),
			new MergeAllPage(),
			new StartWithPage(),
			new WithLatestFromPage(),
			new CountPage(),
			new MaxPage(),
			new MinPage(),
			new ReducePage(),
			new MulticastPage(),
			new PublishPage(),
			new PublishBehaviorPage(),
			new PublishLastPage(),
			new PublishReplayPage(),
			new SharePage(),
			new BufferPage(),
			new BufferCountPage(),
			new BufferTimePage(),
			new BufferTogglePage(),
			new BufferWhenPage(),
			new ConcatMapPage(),
			new ConcatMapToPage(),
			new ExhaustMapPage(),
			new ExpandPage(),
			new GroupByPage(),
			new MapPage(),
			new MapToPage(),
			new MergeMapPage(),
			new MergeMapToPage(),
			new MergeScanPage(),
			new PairwisePage(),
			new PluckPage(),
			new ScanPage(),
			new SwitchMapPage(),
			new SwitchMapToPage(),
			new WindowPage(),
			new WindowCountPage(),
			new WindowTogglePage(),
			new WindowWhenPage(),
			new DelayPage(),
			new DelayWhenPage(),
			new DematerializePage(),
			new MaterializePage(),
			new ObserveOnPage(),
			new SubscribeOnPage(),
			new TapPage(),
			new TimeIntervalPage(),
			new TimeoutPage(),
			new TimeoutWithPage(),
			new TimestampPage(),
			new ToArrayPage()
		].forEach(page => {
			const title = startCase(camelCase(page.category));
			if (!this.pages.has(title)) {
				this.pages.set(title, [])
			}

			page.category = kebabCase(page.category);

			this.pages.get(title).push(page);
		});
	}
}