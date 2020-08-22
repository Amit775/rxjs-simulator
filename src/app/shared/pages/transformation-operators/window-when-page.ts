
import { windowWhen } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class WindowWhenPage extends OperatorPage {
    name = 'windowWhen';
    category = 'Transformation Operators';
    operator = windowWhen
}
