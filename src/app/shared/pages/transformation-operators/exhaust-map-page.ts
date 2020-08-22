
import { exhaustMap } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class ExhaustMapPage extends OperatorPage {
    name = 'exhaustMap';
    category = 'Transformation Operators';
    operator = exhaustMap
}
