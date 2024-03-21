import { IUseCase, Storage } from '~/_shared/application';
import {
  AttachmentOutputMapper,
  AttachmentOutputProps,
  InvalidAttachmentTypeError,
} from '../../common';
import { UploadAndCreateAttachmentInput } from './upload-and-create-attachment.input';
import {
  Attachment,
  AttachmentProps,
  AttachmentsRepository,
} from '~/modules/attachment/domain';

export class UploadAndCreateAttachmentUseCase
  implements
    IUseCase<UploadAndCreateAttachmentInput, UploadAndCreateAttachmentOutput>
{
  constructor(
    private attachmentsRepository: AttachmentsRepository,
    private storage: Storage
  ) {}
  async execute(
    input: UploadAndCreateAttachmentInput
  ): Promise<AttachmentProps> {
    if (!/^(image\/(jpeg|png))$|^application\/pdf$/.test(input.fileType)) {
     throw new InvalidAttachmentTypeError(input.fileType);
    }

    const { url } = await this.storage.store(input);

    const attachment = Attachment.create({
      title: input.fileName,
      url,
    });

    await this.attachmentsRepository.create(attachment);

    return AttachmentOutputMapper.toOutput(attachment);
  }
}

export type UploadAndCreateAttachmentOutput = AttachmentOutputProps;
