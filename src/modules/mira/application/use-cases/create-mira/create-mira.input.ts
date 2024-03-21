import { EntityID } from "~/_shared/domain"
import { GenderTypeEnum, EducationLevelTypeEnum, Address } from "~/modules/mira/domain"

export type CreateMiraInput = {
  userId:  EntityID
  gender: GenderTypeEnum
  profession: string
  yearExperience: number
  biography?: string
  birthdate: Date
  country?: string
  city?: string
  street?: string
  educationLevel: EducationLevelTypeEnum
  isWork?: boolean
  isFreelancer?: boolean
}