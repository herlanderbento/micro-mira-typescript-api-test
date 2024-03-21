import { Attachment, AttachmentProps } from '~/modules/attachment/domain';

export type AttachmentOutputProps = AttachmentProps;

export class AttachmentOutputMapper {
  static toOutput(entity: Attachment): AttachmentOutputProps {
    return entity.toJSON();
  }
}
