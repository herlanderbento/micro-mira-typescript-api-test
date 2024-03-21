import { type Request, type Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { UploadAndCreateAttachmentUseCase } from '~/modules/attachment/application';

export class UploadAndCreateAttachmentController {
  constructor(
    private uploadAndCreateAttachmentUseCase: UploadAndCreateAttachmentUseCase
  ) {}

  async handle(request: Request, response: Response) {
    const file = request.file as Express.Multer.File;

    const output = await this.uploadAndCreateAttachmentUseCase.execute({
      fileName: file.originalname,
      fileType: file.mimetype,
      body: file.buffer,
    });

    return response.status(StatusCodes.OK).json(output);
  }
}
