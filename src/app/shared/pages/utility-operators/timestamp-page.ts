
import { timestamp } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class TimestampPage extends OperatorPage {
    name = 'timestamp';
    category = 'Utility Operators';
    operator = timestamp
}
