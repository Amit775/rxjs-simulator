
import { windowCount } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class WindowCountPage extends OperatorPage {
    name = 'windowCount';
    category = 'Transformation Operators';
    operator = windowCount
}
