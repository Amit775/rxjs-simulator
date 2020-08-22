
import { groupBy } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class GroupByPage extends OperatorPage {
    name = 'groupBy';
    category = 'Transformation Operators';
    operator = groupBy
}
