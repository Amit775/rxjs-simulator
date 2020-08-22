
import { buffer } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class BufferPage extends OperatorPage {
    name = 'buffer';
    category = 'Transformation Operators';
    operator = buffer
}
