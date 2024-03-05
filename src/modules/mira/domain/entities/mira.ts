import { AggregateRoot, EntityID } from "~/_shared/domain";

export type MiraProps = {
  userId: EntityID
  gender: string
  profession: string
  yearExperience: number
  biography: string
  birthDate: Date
  location: string
  isWork: boolean
  isFreelancer: boolean
  image: string
  coverImage: string
  createdAt: Date
  updatedAt: Date
}

export class Mira extends AggregateRoot<MiraProps>{
  get userId(){
    return this.props.userId
  }

  get gender(){
    return this.props.gender
  }

  get profession(){
    return this.props.profession
  }

  get yearExperience(){
    return this.props.yearExperience
  }

  get biography(){
    return this.props.biography
  }

  get birthDate(){
    return this.props.birthDate
  }

  get location(){
    return this.props.location
  }

  get isWork(){
    return this.props.isWork
  }

  get isFreelancer(){
    return this.props.isFreelancer
  }

  get image(){
    return this.props.image
  }

  get coverImage(){
    return this.props.coverImage
  }

  get createdAt(){
    return this.props.createdAt
  }

  get updatedAt(){
    return this.props.updatedAt
  }

  work(){
    this.props.isWork = true
  }

  freelancer(){
    this.props.isFreelancer = true
  }

  toJSON() {
    return {
      id: this.id.toString(),
      userId: this.props.userId.toString(),
      gender: this.props.gender,
      profession: this.props.profession,
      yearExperience: this.props.yearExperience,
      birthDate: this.props.birthDate,
      location: this.props.location,
      isWork: this.props.isWork,
      isFreelancer: this.props.isFreelancer,
      image: this.props.image,
      coverImage: this.props.coverImage,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt
    }
  }
}