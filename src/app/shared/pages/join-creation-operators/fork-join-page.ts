
import { forkJoin } from 'rxjs';

import { CreatorPage } from '../page';

export class ForkJoinPage extends CreatorPage {
    name = 'forkJoin';
    category = 'Join Creation Operators';
    creator = forkJoin
}
