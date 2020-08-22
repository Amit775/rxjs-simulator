
import { mergeScan } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class MergeScanPage extends OperatorPage {
    name = 'mergeScan';
    category = 'Transformation Operators';
    operator = mergeScan
}
