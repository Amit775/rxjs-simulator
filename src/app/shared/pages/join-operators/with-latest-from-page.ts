
import { withLatestFrom } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class WithLatestFromPage extends OperatorPage {
    name = 'withLatestFrom';
    category = 'Join Operators';
    operator = withLatestFrom
}
