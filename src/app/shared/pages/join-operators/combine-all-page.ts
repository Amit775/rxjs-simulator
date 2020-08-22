
import { combineAll } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class CombineAllPage extends OperatorPage {
    name = 'combineAll';
    category = 'Join Operators';
    operator = combineAll
}
