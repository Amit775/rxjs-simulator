
import { partition } from 'rxjs';

import { CreatorMultiplePage } from '../page';

export class PartitionPage extends CreatorMultiplePage {
    name = 'partition';
    category = 'Join Creation Operators';
    creator = partition
}
