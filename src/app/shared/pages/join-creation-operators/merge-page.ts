
import { merge } from 'rxjs';

import { CreatorPage } from '../page';

export class MergePage extends CreatorPage {
    name = 'merge';
    category = 'Join Creation Operators';
    creator = merge
}
