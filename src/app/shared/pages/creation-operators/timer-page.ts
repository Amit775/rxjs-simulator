
import { timer } from 'rxjs';

import { CreatorPage } from '../page';

export class TimerPage extends CreatorPage {
    name = 'timer';
    category = 'Creation Operators';
    creator = timer
}
