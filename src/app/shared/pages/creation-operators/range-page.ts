
import { range } from 'rxjs';

import { CreatorPage } from '../page';

export class RangePage extends CreatorPage {
    name = 'range';
    category = 'Creation Operators';
    creator = range
}
