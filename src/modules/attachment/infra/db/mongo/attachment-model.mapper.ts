import { Attachment } from '~/modules/attachment/domain';
import { IAttachmentModelDocument } from './attachment.model';
import { EntityID } from '~/_shared/domain';

export class AttachmentModelMapper {
  static toModel(entity: Attachment) {
    return {
      _id: entity.id,
      title: entity.title,
      url: entity.url,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toEntity(model: IAttachmentModelDocument) {
    return Attachment.create(
      {
        title: model.title,
        url: model.url,
        createdAt: model.createdAt,
        updatedAt: model.updatedAt,
      },
      new EntityID(String(model._id))
    );
  }
}
