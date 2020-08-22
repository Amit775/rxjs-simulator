
import { publishLast } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class PublishLastPage extends OperatorPage {
    name = 'publishLast';
    category = 'Multicasting Operators';
    operator = publishLast
}
