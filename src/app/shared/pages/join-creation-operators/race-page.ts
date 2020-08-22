
import { race } from 'rxjs';

import { CreatorPage } from '../page';

export class RacePage extends CreatorPage {
    name = 'race';
    category = 'Join Creation Operators';
    creator = race
}
