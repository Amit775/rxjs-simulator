
import { timeoutWith } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class TimeoutWithPage extends OperatorPage {
    name = 'timeoutWith';
    category = 'Utility Operators';
    operator = timeoutWith
}
