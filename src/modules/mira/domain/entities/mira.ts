import { AggregateRoot, EntityID, Optional } from "~/_shared/domain";
import { Address } from "../value-object";
import { EducationLevelEnum, GenderEnum } from "../enums";

export type MiraProps = {
  userId: EntityID
  gender: GenderEnum
  profession: string
  yearExperience: number
  biography: string
  birthDate: Date
  address: Address
  educationLevel: EducationLevelEnum
  isWork?: boolean
  isFreelancer?: boolean
  coverImage?: string
  createdAt: Date
  updatedAt: Date
}

export class Mira extends AggregateRoot<MiraProps>{
  get userId() {
    return this.props.userId.toString()
  }

  get gender() {
    return this.props.gender
  }

  get profession() {
    return this.props.profession
  }

  get yearExperience() {
    return this.props.yearExperience
  }

  get biography() {
    return this.props.biography
  }

  get birthDate() {
    return this.props.birthDate
  }

  get address() {
    return this.props.address
  }

  get isWork() {
    return this.props.isWork
  }

  get isFreelancer() {
    return this.props.isFreelancer
  }

  get coverImage() {
    return this.props.coverImage
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  work() {
    this.props.isWork = true
  }

  freelancer() {
    this.props.isFreelancer = true
  }

  static create(
    props: Optional<MiraProps, 'createdAt' | 'updatedAt'>,
    id?: EntityID,
  ) {
    const mira = new Mira(
      {
        ...props,
        isWork: props.isWork ?? false,
        isFreelancer: props.isFreelancer ?? false,
        createdAt: props.createdAt ?? new Date(),
        updatedAt: props.updatedAt ?? new Date(),
      },
      id,
    )

    return mira
  }

  toJSON() {
    return {
      id: this.id.toString(),
      ...this.props
    }
  }
}