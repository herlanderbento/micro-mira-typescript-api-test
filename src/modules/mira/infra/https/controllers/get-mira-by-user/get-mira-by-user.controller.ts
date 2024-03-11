import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { GetMiraByUserUseCase } from '~/modules/mira/application';
import { getMiraByUserValidated } from './validator';

export class GetMiraByUserController {
  constructor(private readonly GetMiraByUserUseCase: GetMiraByUserUseCase) {}

  public async handle(request: Request, response: Response) {
    const input = await getMiraByUserValidated(request);

    const output = await this.GetMiraByUserUseCase.execute(input);

    return response.status(StatusCodes.OK).json({
      data: output,
    });
  }
}
