
import { elementAt } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class ElementAtPage extends OperatorPage {
    name = 'elementAt';
    category = 'Filtering Operators';
    operator = elementAt
}
