import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { listEducationsValidated } from './validator/list-educations.validator';
import { ListEducationsUseCase } from '~/modules/education/application';

export class ListEducationsController {
  constructor(private readonly listEducationsUseCase: ListEducationsUseCase) {}

  public async handle(request: Request, response: Response) {
    const input = await listEducationsValidated(request);

    const output = await this.listEducationsUseCase.execute(input);

    return response.status(StatusCodes.OK).json({
      data: output,
    });
  }
}
