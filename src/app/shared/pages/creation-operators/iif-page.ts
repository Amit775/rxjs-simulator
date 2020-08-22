
import { iif } from 'rxjs';

import { CreatorPage } from '../page';

export class IifPage extends CreatorPage {
    name = 'iif';
    category = 'Creation Operators';
    creator = iif
}
