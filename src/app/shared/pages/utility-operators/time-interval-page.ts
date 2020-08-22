
import { timeInterval } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class TimeIntervalPage extends OperatorPage {
    name = 'timeInterval';
    category = 'Utility Operators';
    operator = timeInterval
}
