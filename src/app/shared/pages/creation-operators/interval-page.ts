
import { interval } from 'rxjs';

import { CreatorPage } from '../page';

export class IntervalPage extends CreatorPage {
    name = 'interval';
    category = 'Creation Operators';
    creator = interval
}
