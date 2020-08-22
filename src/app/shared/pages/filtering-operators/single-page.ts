
import { single } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class SinglePage extends OperatorPage {
    name = 'single';
    category = 'Filtering Operators';
    operator = single
}
