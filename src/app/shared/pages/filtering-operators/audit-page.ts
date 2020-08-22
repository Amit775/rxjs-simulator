
import { audit } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class AuditPage extends OperatorPage {
    name = 'audit';
    category = 'Filtering Operators';
    operator = audit
}
