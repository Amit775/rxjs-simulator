
import { debounce } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class DebouncePage extends OperatorPage {
    name = 'debounce';
    category = 'Filtering Operators';
    operator = debounce
}
