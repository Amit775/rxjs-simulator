
import { windowTime } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class WindowTimePage extends OperatorPage {
    name = 'windowTime';
    category = 'Transformation Operators';
    operator = windowTime
}
