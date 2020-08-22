
import { delay } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class DelayPage extends OperatorPage {
    name = 'delay';
    category = 'Utility Operators';
    operator = delay
}
