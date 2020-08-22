
import { mergeMap } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class MergeMapPage extends OperatorPage {
    name = 'mergeMap';
    category = 'Transformation Operators';
    operator = mergeMap
}
