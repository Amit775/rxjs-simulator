
import { subscribeOn } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class SubscribeOnPage extends OperatorPage {
    name = 'subscribeOn';
    category = 'Utility Operators';
    operator = subscribeOn
}
