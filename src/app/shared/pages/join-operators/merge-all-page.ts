
import { mergeAll } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class MergeAllPage extends OperatorPage {
    name = 'mergeAll';
    category = 'Join Operators';
    operator = mergeAll
}
