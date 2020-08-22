
import { mergeMapTo } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class MergeMapToPage extends OperatorPage {
    name = 'mergeMapTo';
    category = 'Transformation Operators';
    operator = mergeMapTo
}
