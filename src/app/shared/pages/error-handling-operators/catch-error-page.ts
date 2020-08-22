
import { catchError } from 'rxjs/operators';

import { OperatorPage } from '../page';

export class CatchErrorPage extends OperatorPage {
    name = 'catchError';
    category = 'Error Handling Operators';
    operator = catchError
}
