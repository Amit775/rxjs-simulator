
import { delayWhen } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class DelayWhenPage extends OperatorPage {
    name = 'delayWhen';
    category = 'Utility Operators';
    operator = delayWhen
}
