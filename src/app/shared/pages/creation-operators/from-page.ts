
import { from } from 'rxjs';

import { CreatorPage } from '../page';

export class FromPage extends CreatorPage {
    name = 'from';
    category = 'Creation Operators';
    creator = from
}
