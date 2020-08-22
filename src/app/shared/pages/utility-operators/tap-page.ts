
import { tap } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class TapPage extends OperatorPage {
    name = 'tap';
    category = 'Utility Operators';
    operator = tap
}
