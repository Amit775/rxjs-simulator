
import { observeOn } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class ObserveOnPage extends OperatorPage {
    name = 'observeOn';
    category = 'Utility Operators';
    operator = observeOn
}
