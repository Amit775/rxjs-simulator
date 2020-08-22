
import { map } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class MapPage extends OperatorPage {
    name = 'map';
    category = 'Transformation Operators';
    operator = map
}
