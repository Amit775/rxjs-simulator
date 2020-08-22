
import { defaultIfEmpty } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class DefaultIfEmptyPage extends OperatorPage {
    name = 'defaultIfEmpty';
    category = 'Conditional and Boolean Operators';
    operator = defaultIfEmpty
}
