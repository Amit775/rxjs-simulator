
import { bufferToggle } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class BufferTogglePage extends OperatorPage {
    name = 'bufferToggle';
    category = 'Transformation Operators';
    operator = bufferToggle
}
