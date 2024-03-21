import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { deleteEducationValidated } from './validator/delete-education.validator';
import { DeleteEducationUseCase } from '~/modules/education/application';

export class DeleteEducationController {
  constructor(private readonly deleteCareerUseCase: DeleteEducationUseCase) {}

  public async handle(request: Request, response: Response) {
    const input = await deleteEducationValidated(request);

    const output = await this.deleteCareerUseCase.execute(input);

    return response.status(StatusCodes.NO_CONTENT).json({
      data: output,
    });
  }
}
