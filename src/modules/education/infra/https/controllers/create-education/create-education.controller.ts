import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createEducationValidated } from './validator';
import { CreateEducationUseCase } from '~/modules/education/application';

export class CreateEducationController {
  constructor(
    private readonly createEducationUseCase: CreateEducationUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const input = await createEducationValidated(request);

    const output = await this.createEducationUseCase.execute(input);

    return response.status(StatusCodes.CREATED).json({
      data: output,
    });
  }
}
