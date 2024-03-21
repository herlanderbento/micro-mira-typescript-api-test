import { StatusCodes } from 'http-status-codes';
import { AppError } from '~/_shared/domain';

export class InvalidAttachmentTypeError extends AppError {
  constructor(type: string) {
    super({
      name: 'InvalidAttachmentTypeError',
      message: `File type "${type}" is not valid.`,
      statusCode: StatusCodes.CONFLICT,
    });
  }
}
