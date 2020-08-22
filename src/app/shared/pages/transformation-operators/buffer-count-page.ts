
import { bufferCount } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class BufferCountPage extends OperatorPage {
    name = 'bufferCount';
    category = 'Transformation Operators';
    operator = bufferCount
}
