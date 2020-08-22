
import { bufferWhen } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class BufferWhenPage extends OperatorPage {
    name = 'bufferWhen';
    category = 'Transformation Operators';
    operator = bufferWhen
}
