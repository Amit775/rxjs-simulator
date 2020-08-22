
import { auditTime } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class AuditTimePage extends OperatorPage {
    name = 'auditTime';
    category = 'Filtering Operators';
    operator = auditTime
}
