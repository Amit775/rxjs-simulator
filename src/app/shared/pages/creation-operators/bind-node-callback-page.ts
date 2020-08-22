
import { bindNodeCallback } from 'rxjs';

import { CreatorCallbackPage } from '../page';

export class BindNodeCallbackPage extends CreatorCallbackPage {
    name = 'bindNodeCallback';
    category = 'Creation Operators';
    creator = bindNodeCallback
}
