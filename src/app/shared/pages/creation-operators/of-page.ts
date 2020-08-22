
import { of } from 'rxjs';

import { CreatorPage } from '../page';

export class OfPage extends CreatorPage {
    name = 'of';
    category = 'Creation Operators';
    creator = of
}
