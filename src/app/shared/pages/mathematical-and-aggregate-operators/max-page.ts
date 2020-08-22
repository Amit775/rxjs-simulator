
import { max } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class MaxPage extends OperatorPage {
    name = 'max';
    category = 'Mathematical and Aggregate Operators';
    operator = max
}
