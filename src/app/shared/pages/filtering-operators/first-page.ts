
import { first } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class FirstPage extends OperatorPage {
    name = 'first';
    category = 'Filtering Operators';
    operator = first
}
