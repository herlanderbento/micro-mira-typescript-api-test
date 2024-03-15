import { AggregateRoot, EntityID, Optional } from '~/_shared/domain';
import { employmentType, LocationType } from './career.enum';

export type CareerProps = {
  miraId: EntityID;
  companyId?: EntityID;
  positionId?: EntityID;
  title: string;
  companyName?: string;
  description?: string;
  location?: string;
  locationType: LocationType;
  employmentType: employmentType;
  startYear: Date;
  endYear?: Date;
  isShow?: boolean;
  isCurrent?: boolean;
  isVerified?: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export class Career extends AggregateRoot<CareerProps> {
  constructor(props: CareerProps, id?: EntityID) {
    super(props, id);
  }

  get miraId() {
    return this.props.miraId.toString();
  }

  get companyId() {
    return this.props.companyId?.toString();
  }

  get positionId() {
    return this.props.positionId?.toString();
  }

  get title() {
    return this.props.title;
  }

  get companyName() {
    return this.props.companyName;
  }

  get description() {
    return this.props.description;
  }

  get location() {
    return this.props.location;
  }

  get locationType() {
    return this.props.locationType;
  }

  get employmentType() {
    return this.props.employmentType;
  }

  get startYear() {
    return this.props.startYear;
  }

  get endYear() {
    return this.props.endYear;
  }

  get isShow() {
    return this.props.isShow;
  }

  get isCurrent() {
    return this.props.isCurrent;
  }

  get isVerified() {
    return this.props.isVerified;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  show() {
    this.props.isShow = true;
  }

  hide() {
    this.props.isShow = false;
  }

  current() {
    this.props.isCurrent = true;
  }

  noCurrent() {
    this.props.isCurrent = false;
  }

  verified() {
    this.props.isVerified = true;
  }

  noVerified() {
    this.props.isVerified = false;
  }

  static create(
    props: Optional<
      CareerProps,
      'createdAt' | 'updatedAt' | 'isShow' | 'isCurrent' | 'isVerified'
    >,
    id?: EntityID
  ): Career {
    return new Career(
      {
        ...props,
        isShow: props.isShow ?? true,
        isCurrent: props.isCurrent ?? false,
        isVerified: props.isVerified ?? false,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
      id
    );
  }

  update(props: Partial<CareerProps>) {
    Object.assign(this.props, { ...props, updatedAt: new Date() });
  }

  toJSON() {
    return {
      id: this.id.toString(),
      ...this.props,
    };
  }
}
