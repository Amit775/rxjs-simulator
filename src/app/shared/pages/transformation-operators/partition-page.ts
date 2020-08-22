
import { partition } from 'rxjs/operators';

import { OperatorMultiplePage } from '../page';

export class PartitionPage extends OperatorMultiplePage {
    name = 'partition';
    category = 'Transformation Operators';
    operator = partition
}
