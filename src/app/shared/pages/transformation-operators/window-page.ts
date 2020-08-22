
import { window } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class WindowPage extends OperatorPage {
    name = 'window';
    category = 'Transformation Operators';
    operator = window
}
