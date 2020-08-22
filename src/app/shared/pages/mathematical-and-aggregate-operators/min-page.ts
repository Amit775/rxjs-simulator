
import { min } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class MinPage extends OperatorPage {
    name = 'min';
    category = 'Mathematical and Aggregate Operators';
    operator = min
}
