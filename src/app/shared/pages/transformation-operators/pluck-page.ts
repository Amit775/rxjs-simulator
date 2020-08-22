
import { pluck } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class PluckPage extends OperatorPage {
    name = 'pluck';
    category = 'Transformation Operators';
    operator = pluck
}
