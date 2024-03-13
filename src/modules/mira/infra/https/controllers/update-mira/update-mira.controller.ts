import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UpdateMiraUseCase } from '~/modules/mira/application';
import { updateMiraValidated } from './validator';

export class UpdateMiraController {
  constructor(private readonly updateMiraUseCase: UpdateMiraUseCase) {}

  public async handle(request: Request, response: Response) {
    const input = await updateMiraValidated(request);

    const output = await this.updateMiraUseCase.execute(input);

    return response.status(StatusCodes.OK).json({
      data: output,
    });
  }
}
