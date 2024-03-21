import { AggregateRoot, EntityID, Optional } from '~/_shared/domain';

export interface AttachmentProps {
  title: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Attachment extends AggregateRoot<AttachmentProps> {
  get title() {
    return this.props.title;
  }

  get url() {
    return this.props.url;
  }

  get createdAt() {
    return this.props.createdAt;
  }
  get updatedAt() {
    return this.props.updatedAt;
  }

  static create(
    props: Optional<AttachmentProps, 'createdAt' | 'updatedAt'>,
    id?: EntityID
  ) {
    const attachment = new Attachment(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
      id
    );

    return attachment;
  }

  toJSON() {
    return {
      id: this.id.toString(),
      title: this.props.title,
      url: this.props.url,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
    };
  }
}
