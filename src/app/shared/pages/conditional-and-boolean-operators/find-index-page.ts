
import { findIndex } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class FindIndexPage extends OperatorPage {
    name = 'findIndex';
    category = 'Conditional and Boolean Operators';
    operator = findIndex
}
