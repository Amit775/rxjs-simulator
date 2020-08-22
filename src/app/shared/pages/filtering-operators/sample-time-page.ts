
import { sampleTime } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class SampleTimePage extends OperatorPage {
    name = 'sampleTime';
    category = 'Filtering Operators';
    operator = sampleTime
}
