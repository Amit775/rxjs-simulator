
import { distinctUntilChanged } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class DistinctUntilChangedPage extends OperatorPage {
    name = 'distinctUntilChanged';
    category = 'Filtering Operators';
    operator = distinctUntilChanged
}
