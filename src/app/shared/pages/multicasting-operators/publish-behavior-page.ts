
import { publishBehavior } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class PublishBehaviorPage extends OperatorPage {
    name = 'publishBehavior';
    category = 'Multicasting Operators';
    operator = publishBehavior
}
