
import { skip } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class SkipPage extends OperatorPage {
    name = 'skip';
    category = 'Filtering Operators';
    operator = skip
}
