import { AggregateRoot, EntityID, Optional } from '~/_shared/domain';

export type ToolProps = {
  name: string;
  code: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
};

export class Tool extends AggregateRoot<ToolProps> {
  constructor(props: ToolProps, id?: EntityID) {
    super(props, id);
  }

  get name() {
    return this.props.name;
  }

  get code() {
    return this.props.code;
  }

  get icon() {
    return this.props.icon;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  static create(
    props: Optional<ToolProps, 'createdAt' | 'updatedAt'>,
    id?: EntityID
  ): Tool {
    const tool = new Tool(
      {
        ...props,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
      id
    );

    return tool;
  }
  toJSON() {
    return {
      id: this.id.toString(),
      name: this.props.name,
      code: this.props.code,
      icon: this.props.icon,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
    };
  }
}
