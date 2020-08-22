
import { switchMap } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class SwitchMapPage extends OperatorPage {
    name = 'switchMap';
    category = 'Transformation Operators';
    operator = switchMap
}
