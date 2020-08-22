
import { publish } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class PublishPage extends OperatorPage {
    name = 'publish';
    category = 'Multicasting Operators';
    operator = publish
}
