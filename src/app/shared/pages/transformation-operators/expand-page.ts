
import { expand } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class ExpandPage extends OperatorPage {
    name = 'expand';
    category = 'Transformation Operators';
    operator = expand
}
