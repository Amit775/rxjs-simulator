
import { takeUntil } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class TakeUntilPage extends OperatorPage {
    name = 'takeUntil';
    category = 'Filtering Operators';
    operator = takeUntil
}
