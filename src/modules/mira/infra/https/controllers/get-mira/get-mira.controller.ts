import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { GetMiraUseCase } from '~/modules/mira/application';
import { getMiraValidated } from './validator';

export class GetMiraController {
  constructor(private readonly getMiraUseCase: GetMiraUseCase) {}

  public async handle(request: Request, response: Response) {
    const input = await getMiraValidated(request);

    const output = await this.getMiraUseCase.execute(input);

    return response.status(StatusCodes.OK).json({
      data: output,
    });
  }
}
