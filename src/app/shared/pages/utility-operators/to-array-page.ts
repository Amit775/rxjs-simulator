
import { toArray } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class ToArrayPage extends OperatorPage {
    name = 'toArray';
    category = 'Utility Operators';
    operator = toArray
}
