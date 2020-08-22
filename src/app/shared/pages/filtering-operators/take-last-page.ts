
import { takeLast } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class TakeLastPage extends OperatorPage {
    name = 'takeLast';
    category = 'Filtering Operators';
    operator = takeLast
}
