
import { takeWhile } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class TakeWhilePage extends OperatorPage {
    name = 'takeWhile';
    category = 'Filtering Operators';
    operator = takeWhile
}
