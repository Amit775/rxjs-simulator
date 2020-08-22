
import { fromEventPattern } from 'rxjs';

import { CreatorPage } from '../page';

export class FromEventPatternPage extends CreatorPage {
    name = 'fromEventPattern';
    category = 'Creation Operators';
    creator = fromEventPattern
}
