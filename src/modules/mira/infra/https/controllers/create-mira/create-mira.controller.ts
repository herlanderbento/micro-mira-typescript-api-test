import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { CreateMiraUseCase } from '~/modules/mira/application';
import { createMiraValidated } from './validator';
import { EntityID } from '~/_shared/domain';

export class CreateMiraController {
  constructor(private readonly createMiraUseCase: CreateMiraUseCase) {}

  public async handle(request: Request, response: Response) {
    const input = await createMiraValidated(request);

    console.log(`controller: ${input.userId}`);

    const output = await this.createMiraUseCase.execute(input);

    return response.status(StatusCodes.CREATED).json({
      data: output,
    });
  }
}
