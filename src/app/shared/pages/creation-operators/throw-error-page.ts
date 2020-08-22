
import { throwError } from 'rxjs';

import { CreatorPage } from '../page';

export class ThrowErrorPage extends CreatorPage {
    name = 'throwError';
    category = 'Creation Operators';
    creator = throwError
}
