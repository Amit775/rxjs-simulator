
import { bindCallback } from 'rxjs';

import { CreatorCallbackPage } from '../page';

export class BindCallbackPage extends CreatorCallbackPage {
    name = 'bindCallback';
    category = 'Creation Operators';
    creator = bindCallback
}
