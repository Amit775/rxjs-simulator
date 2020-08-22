
import { concatMapTo } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class ConcatMapToPage extends OperatorPage {
    name = 'concatMapTo';
    category = 'Transformation Operators';
    operator = concatMapTo
}
