import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { updateEducationValidated } from './validator';
import { UpdateEducationUseCase } from '~/modules/education/application';

export class UpdateEducationController {
  constructor(private readonly updateEducationUseCase: UpdateEducationUseCase) {}

  public async handle(request: Request, response: Response) {
    const input = await updateEducationValidated(request);

    const output = await this.updateEducationUseCase.execute(input);

    return response.status(StatusCodes.NO_CONTENT).json({
      data: output,
    });
  }
}
