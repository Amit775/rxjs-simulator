
import { throttle } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class ThrottlePage extends OperatorPage {
    name = 'throttle';
    category = 'Filtering Operators';
    operator = throttle
}
