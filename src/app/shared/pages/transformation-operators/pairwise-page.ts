
import { pairwise } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class PairwisePage extends OperatorPage {
    name = 'pairwise';
    category = 'Transformation Operators';
    operator = pairwise
}
