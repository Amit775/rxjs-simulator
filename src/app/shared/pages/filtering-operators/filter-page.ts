
import { filter } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class FilterPage extends OperatorPage {
    name = 'filter';
    category = 'Filtering Operators';
    operator = filter
}
