
import { concatAll } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class ConcatAllPage extends OperatorPage {
    name = 'concatAll';
    category = 'Join Operators';
    operator = concatAll
}
