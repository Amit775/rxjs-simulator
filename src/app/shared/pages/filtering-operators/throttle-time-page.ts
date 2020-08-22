
import { throttleTime } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class ThrottleTimePage extends OperatorPage {
    name = 'throttleTime';
    category = 'Filtering Operators';
    operator = throttleTime
}
