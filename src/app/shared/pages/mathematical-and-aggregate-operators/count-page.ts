
import { count } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class CountPage extends OperatorPage {
    name = 'count';
    category = 'Mathematical and Aggregate Operators';
    operator = count
}
