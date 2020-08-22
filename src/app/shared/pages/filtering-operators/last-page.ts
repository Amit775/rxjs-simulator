
import { last } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class LastPage extends OperatorPage {
    name = 'last';
    category = 'Filtering Operators';
    operator = last
}
