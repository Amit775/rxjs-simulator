
import { find } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class FindPage extends OperatorPage {
    name = 'find';
    category = 'Conditional and Boolean Operators';
    operator = find
}
