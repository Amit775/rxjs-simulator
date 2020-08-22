
import { materialize } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class MaterializePage extends OperatorPage {
    name = 'materialize';
    category = 'Utility Operators';
    operator = materialize
}
