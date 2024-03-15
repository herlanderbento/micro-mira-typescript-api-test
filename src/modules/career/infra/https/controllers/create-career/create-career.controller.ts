import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CreateCareerUseCase } from '~/modules/career/application';
import { createCareerValidated } from './validator';

export class CreateCareerController {
  constructor(private readonly createCareerUseCase: CreateCareerUseCase) {}

  public async handle(request: Request, response: Response) {
    const input = await createCareerValidated(request);

    const output = await this.createCareerUseCase.execute(input);

    return response.status(StatusCodes.CREATED).json({
      data: output,
    });
  }
}
