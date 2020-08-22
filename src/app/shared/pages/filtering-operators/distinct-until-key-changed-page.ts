
import { distinctUntilKeyChanged } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class DistinctUntilKeyChangedPage extends OperatorPage {
    name = 'distinctUntilKeyChanged';
    category = 'Filtering Operators';
    operator = distinctUntilKeyChanged
}
