
import { fromEvent } from 'rxjs';

import { CreatorPage } from '../page';

export class FromEventPage extends CreatorPage {
    name = 'fromEvent';
    category = 'Creation Operators';
    creator = fromEvent
}
