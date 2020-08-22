
import { reduce } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class ReducePage extends OperatorPage {
    name = 'reduce';
    category = 'Mathematical and Aggregate Operators';
    operator = reduce
}
