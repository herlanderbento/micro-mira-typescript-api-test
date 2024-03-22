import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { createToolValidated } from './validator/create-tool.validator';
import { CreateToolUseCase } from '~/modules/tool/application';

export class CreateToolController {
  constructor(private readonly createMiraUseCase: CreateToolUseCase) { }
  
  async handle(request: Request, response: Response) {
    const input = await createToolValidated(request);

    const output = await this.createMiraUseCase.execute(input);

    return response.status(StatusCodes.CREATED).json({
      data: output,
    });
  }
}
