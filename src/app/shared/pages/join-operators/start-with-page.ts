
import { startWith } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class StartWithPage extends OperatorPage {
    name = 'startWith';
    category = 'Join Operators';
    operator = startWith
}
