
import { skipWhile } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class SkipWhilePage extends OperatorPage {
    name = 'skipWhile';
    category = 'Filtering Operators';
    operator = skipWhile
}
