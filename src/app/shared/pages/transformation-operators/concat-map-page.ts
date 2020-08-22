
import { concatMap } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class ConcatMapPage extends OperatorPage {
    name = 'concatMap';
    category = 'Transformation Operators';
    operator = concatMap
}
