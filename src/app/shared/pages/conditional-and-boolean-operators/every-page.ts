
import { every } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class EveryPage extends OperatorPage {
    name = 'every';
    category = 'Conditional and Boolean Operators';
    operator = every
}
