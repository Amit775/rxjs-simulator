
import { isEmpty } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class IsEmptyPage extends OperatorPage {
    name = 'isEmpty';
    category = 'Conditional and Boolean Operators';
    operator = isEmpty
}
