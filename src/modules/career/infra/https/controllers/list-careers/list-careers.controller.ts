import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ListCareersUseCase } from '~/modules/career/application';
import { listCareersValidated } from './validator';

export class ListCareersController {
  constructor(private readonly listCareersUseCase: ListCareersUseCase) {}

  public async handle(request: Request, response: Response) {
    const input = await listCareersValidated(request);

    const output = await this.listCareersUseCase.execute(input);

    return response.status(StatusCodes.OK).json({
      data: output,
    });
  }
}
