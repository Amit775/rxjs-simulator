
import { skipLast } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class SkipLastPage extends OperatorPage {
    name = 'skipLast';
    category = 'Filtering Operators';
    operator = skipLast
}
