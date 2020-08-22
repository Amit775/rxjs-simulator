
import { distinct } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class DistinctPage extends OperatorPage {
    name = 'distinct';
    category = 'Filtering Operators';
    operator = distinct
}
