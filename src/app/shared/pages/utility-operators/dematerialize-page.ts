
import { dematerialize } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class DematerializePage extends OperatorPage {
    name = 'dematerialize';
    category = 'Utility Operators';
    operator = dematerialize
}
