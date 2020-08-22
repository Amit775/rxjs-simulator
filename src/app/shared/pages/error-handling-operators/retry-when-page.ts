
import { retryWhen } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class RetryWhenPage extends OperatorPage {
    name = 'retryWhen';
    category = 'Error Handling Operators';
    operator = retryWhen
}
