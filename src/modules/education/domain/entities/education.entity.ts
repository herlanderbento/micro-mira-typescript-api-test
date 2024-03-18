import { AggregateRoot, EntityID, Optional } from '~/_shared/domain';

export type EducationProps = {
  miraId: EntityID;
  title: string;
  institute: string;
  description?: string;
  location?: string;
  startYear: Date;
  endYear?: Date;
  isCurrent?: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export class Education extends AggregateRoot<EducationProps> {
  constructor(props: EducationProps, id?: EntityID) {
    super(props, id);
  }

  get miraId() {
    return this.props.miraId.toString();
  }

  get title() {
    return this.props.title;
  }

  get institute() {
    return this.props.institute;
  }

  get description() {
    return this.props.description;
  }

  get location() {
    return this.props.location;
  }

  get startYear() {
    return this.props.startYear;
  }

  get endYear() {
    return this.props.endYear;
  }

  get isCurrent() {
    return this.props.isCurrent;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  current() {
    this.props.isCurrent = true;
  }

  noCurrent() {
    this.props.isCurrent = false;
  }

  static create(
    props: Optional<EducationProps, 'createdAt' | 'updatedAt' | 'isCurrent'>,
    id?: EntityID
  ) {
    return new Education(
      {
        ...props,
        isCurrent: props.isCurrent ?? false,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
      id
    );
  }
  update(props: Partial<EducationProps>) {
    Object.assign(this.props, { ...props, updatedAt: new Date() });
  }

  toJSON() {
    return {
      id: this.id.toString(),
      ...this.props,
    };
  }
}
