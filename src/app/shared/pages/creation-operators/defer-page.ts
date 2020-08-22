
import { defer } from 'rxjs';

import { CreatorPage } from '../page';

export class DeferPage extends CreatorPage {
    name = 'defer';
    category = 'Creation Operators';
    creator = defer
}
