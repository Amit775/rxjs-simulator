
import { zip } from 'rxjs';

import { CreatorPage } from '../page';

export class ZipPage extends CreatorPage {
    name = 'zip';
    category = 'Join Creation Operators';
    creator = zip
}
