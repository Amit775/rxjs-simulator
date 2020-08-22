
import { ignoreElements } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class IgnoreElementsPage extends OperatorPage {
    name = 'ignoreElements';
    category = 'Filtering Operators';
    operator = ignoreElements
}
