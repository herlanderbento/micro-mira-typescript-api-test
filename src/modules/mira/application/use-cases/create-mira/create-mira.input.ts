import { EntityID } from "~/_shared/domain"
import { GenderEnum, EducationLevelEnum, Address } from "~/modules/mira/domain"

export interface CreateMiraInput{
  userId: EntityID,
  gender: GenderEnum
  profession: string
  yearExperience: number
  biography: string
  birthDate: Date
  address: Address
  educationLevel: EducationLevelEnum
  isWork: boolean
  isFreelancer: boolean
  image: string
  coverImage: string
}