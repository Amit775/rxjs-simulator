
import { skipUntil } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class SkipUntilPage extends OperatorPage {
    name = 'skipUntil';
    category = 'Filtering Operators';
    operator = skipUntil
}
