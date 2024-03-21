import { Attachment, AttachmentsRepository } from '~/modules/attachment/domain';
import { AttachmentModel } from './attachment.model';

export class AttachmentMongooseRepository implements AttachmentsRepository {
  constructor(private attachmentModel: typeof AttachmentModel){}
  async create(entity: Attachment): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
