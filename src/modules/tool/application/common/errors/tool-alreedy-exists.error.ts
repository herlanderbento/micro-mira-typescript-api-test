import { StatusCodes } from 'http-status-codes';
import { AppError } from '~/_shared/domain';

export class ToolAlreadyExistsError extends AppError {
  constructor(message?: string) {
    super({
      name: 'ToolAlreadyExistsError',
      message: message ?? 'Tool already exists',
      statusCode: StatusCodes.CONFLICT,
    });
  }
}
