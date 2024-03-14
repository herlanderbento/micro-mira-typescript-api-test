import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { ListMirasUseCase } from '~/modules/mira/application';

export class ListMirasController {
  constructor(private listMirasUseCase: ListMirasUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const output = await this.listMirasUseCase.execute(request.query);

    return response.status(StatusCodes.OK).json({
      data: output,
    });
  }
}
