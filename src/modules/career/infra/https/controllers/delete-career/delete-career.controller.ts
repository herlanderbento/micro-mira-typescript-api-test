import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { DeleteCareerUseCase } from '~/modules/career/application';
import { deleteCareerValidated } from './validator';

export class DeleteCareerController {
  constructor(private readonly deleteCareerUseCase: DeleteCareerUseCase) {}

  public async handle(request: Request, response: Response) {
    const input = await deleteCareerValidated(request);

    const output = await this.deleteCareerUseCase.execute(input);

    return response.status(StatusCodes.NO_CONTENT).json({
      data: output,
    });
  }
}
