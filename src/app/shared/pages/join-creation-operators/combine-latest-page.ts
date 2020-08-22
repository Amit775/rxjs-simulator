
import { combineLatest } from 'rxjs';

import { CreatorPage } from '../page';

export class CombineLatestPage extends CreatorPage {
    name = 'combineLatest';
    category = 'Join Creation Operators';
    creator = combineLatest
}
