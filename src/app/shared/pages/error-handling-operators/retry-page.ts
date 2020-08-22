
import { retry } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class RetryPage extends OperatorPage {
    name = 'retry';
    category = 'Error Handling Operators';
    operator = retry
}
