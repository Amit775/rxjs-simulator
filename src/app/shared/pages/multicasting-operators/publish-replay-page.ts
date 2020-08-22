
import { publishReplay } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class PublishReplayPage extends OperatorPage {
    name = 'publishReplay';
    category = 'Multicasting Operators';
    operator = publishReplay
}
