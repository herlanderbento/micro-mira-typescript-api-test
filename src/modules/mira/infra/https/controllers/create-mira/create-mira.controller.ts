import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CreateMiraUseCase } from '~/modules/mira/application';
import { createMiraValidated } from './validator';

export class CreateMiraController {
  constructor(private readonly createMiraUseCase: CreateMiraUseCase) { }
  
  async handle(request: Request, response: Response) {
    const input = await createMiraValidated(request);

    const output = await this.createMiraUseCase.execute(input);

    return response.status(StatusCodes.CREATED).json({
      data: output,
    });
  }
}
