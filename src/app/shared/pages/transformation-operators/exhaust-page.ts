
import { exhaust } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class ExhaustPage extends OperatorPage {
    name = 'exhaust';
    category = 'Transformation Operators';
    operator = exhaust
}
