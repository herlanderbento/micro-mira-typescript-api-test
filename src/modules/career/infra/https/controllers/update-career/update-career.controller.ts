import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UpdateCareerUseCase } from '~/modules/career/application';
import { updateCareerValidated } from './validator';

export class UpdateCareerController {
  constructor(private readonly updateCareerUseCase: UpdateCareerUseCase) {}

  public async handle(request: Request, response: Response) {
    const input = await updateCareerValidated(request);

    const output = await this.updateCareerUseCase.execute(input);

    return response.status(StatusCodes.NO_CONTENT).json({
      data: output,
    });
  }
}
