
import { empty } from 'rxjs';

import { CreatorPage } from '../page';

export class EmptyPage extends CreatorPage {
    name = 'empty';
    category = 'Creation Operators';
    creator = empty
}
