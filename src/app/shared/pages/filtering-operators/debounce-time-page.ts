
import { debounceTime } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class DebounceTimePage extends OperatorPage {
    name = 'debounceTime';
    category = 'Filtering Operators';
    operator = debounceTime
}
