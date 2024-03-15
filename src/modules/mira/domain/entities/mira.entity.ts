import { AggregateRoot, EntityID, Optional } from '~/_shared/domain';
import { Address } from '../value-object';
import { EducationLevelTypeEnum, GenderTypeEnum } from '../enums';

export type MiraProps = {
  userId: EntityID;
  gender: GenderTypeEnum;
  profession: string;
  yearExperience: number;
  biography?: string | null;
  birthdate: Date;
  address: Address;
  educationLevel: EducationLevelTypeEnum;
  isWork?: boolean;
  isFreelancer?: boolean;
  coverImage?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export class Mira extends AggregateRoot<MiraProps> {
  constructor(props: MiraProps, id?: EntityID) {
    super(props, id);
  }

  get userId() {
    return this.props.userId.toString();
  }

  get gender() {
    return this.props.gender;
  }

  get profession() {
    return this.props.profession;
  }

  get yearExperience() {
    return this.props.yearExperience;
  }

  get biography() {
    return this.props.biography;
  }

  get birthdate() {
    return this.props.birthdate;
  }

  get address(): Address {
    return this.props.address;
  }

  changeAddress(address: Address) {
    this.props.address = address;
  }

  get educationLevel() {
    return this.props.educationLevel;
  }

  get isWork() {
    return this.props.isWork;
  }

  get isFreelancer() {
    return this.props.isFreelancer;
  }

  get coverImage() {
    return this.props.coverImage;
  }

  get createdAt() {
    return this.props.createdAt;
  }

  get updatedAt() {
    return this.props.updatedAt;
  }

  work() {
    this.props.isWork = true;
  }

  unwork() {
    this.props.isWork = true;
  }

  freelancer() {
    this.props.isFreelancer = true;
  }

  set address(address: Address) {
    this.props.address = address;
  }

  static create(
    props: Optional<MiraProps, 'createdAt' | 'updatedAt'>,
    id?: EntityID
  ) {
    const mira = new Mira(
      {
        ...props,
        biography: props.biography ?? null,
        coverImage: props.coverImage ?? null,
        isWork: props.isWork ?? false,
        isFreelancer: props.isFreelancer ?? false,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
      id
    );

    return mira;
  }

  update(props: Partial<MiraProps>): void {
    Object.assign(this.props, { ...props, updatedAt: new Date() });
  }

  toJSON() {
    return {
      id: this.id.toString(),
      ...this.props,
    };
  }
}
