
import { timeout } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class TimeoutPage extends OperatorPage {
    name = 'timeout';
    category = 'Utility Operators';
    operator = timeout
}
