
import { ajax } from 'rxjs/ajax';

import { CreatorPage } from '../page';

export class AjaxPage extends CreatorPage {
    name = 'ajax';
    category = 'Creation Operators';
    creator = ajax
}
