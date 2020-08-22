
import { exhaust } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class ExhaustPage extends OperatorPage {
    name = 'exhaust';
    category = 'Join Operators';
    operator = exhaust
}
