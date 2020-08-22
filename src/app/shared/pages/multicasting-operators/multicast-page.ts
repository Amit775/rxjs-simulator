
import { multicast } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class MulticastPage extends OperatorPage {
    name = 'multicast';
    category = 'Multicasting Operators';
    operator = multicast
}
