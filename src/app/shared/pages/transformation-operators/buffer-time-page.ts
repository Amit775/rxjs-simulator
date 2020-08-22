
import { bufferTime } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class BufferTimePage extends OperatorPage {
    name = 'bufferTime';
    category = 'Transformation Operators';
    operator = bufferTime
}
