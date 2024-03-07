import { StatusCodes } from "http-status-codes";
import { AppError } from "~/_shared/domain";

export class MiraAlreadyExistsError extends AppError {
  constructor(message?: string) {
    super({
      name: 'MiraAlreadyExistsError',
      message: message ?? 'Mira already exists',
      statusCode: StatusCodes.CONFLICT,
    });
  }
}
