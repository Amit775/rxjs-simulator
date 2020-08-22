
import { sample } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class SamplePage extends OperatorPage {
    name = 'sample';
    category = 'Filtering Operators';
    operator = sample
}
