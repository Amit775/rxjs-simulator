
import { share } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class SharePage extends OperatorPage {
    name = 'share';
    category = 'Multicasting Operators';
    operator = share
}
