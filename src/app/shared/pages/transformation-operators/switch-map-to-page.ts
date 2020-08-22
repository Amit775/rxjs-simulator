
import { switchMapTo } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class SwitchMapToPage extends OperatorPage {
    name = 'switchMapTo';
    category = 'Transformation Operators';
    operator = switchMapTo
}
