
import { concat } from 'rxjs';

import { CreatorPage } from '../page';

export class ConcatPage extends CreatorPage {
    name = 'concat';
    category = 'Join Creation Operators';
    creator = concat
}
