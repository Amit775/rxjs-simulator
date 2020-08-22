
import { take } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class TakePage extends OperatorPage {
    name = 'take';
    category = 'Filtering Operators';
    operator = take
}
