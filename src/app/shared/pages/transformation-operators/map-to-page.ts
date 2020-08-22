
import { mapTo } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class MapToPage extends OperatorPage {
    name = 'mapTo';
    category = 'Transformation Operators';
    operator = mapTo
}
