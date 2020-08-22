
import { generate } from 'rxjs';

import { CreatorPage } from '../page';

export class GeneratePage extends CreatorPage {
    name = 'generate';
    category = 'Creation Operators';
    creator = generate
}
