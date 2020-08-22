
import { scan } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class ScanPage extends OperatorPage {
    name = 'scan';
    category = 'Transformation Operators';
    operator = scan
}
