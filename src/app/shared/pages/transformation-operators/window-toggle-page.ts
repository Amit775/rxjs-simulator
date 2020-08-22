
import { windowToggle } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class WindowTogglePage extends OperatorPage {
    name = 'windowToggle';
    category = 'Transformation Operators';
    operator = windowToggle
}
