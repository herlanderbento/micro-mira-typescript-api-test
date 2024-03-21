import { EntityID } from "~/_shared/domain"
import { GenderTypeEnum, EducationLevelTypeEnum, Address } from "~/modules/mira/domain"

export type UpdateMiraInput = {
  id: EntityID
  gender: GenderTypeEnum
  profession: string
  yearExperience: number
  biography?: string
  country?: string
  city?: string
  street?: string
  birthdate: Date
  educationLevel: EducationLevelTypeEnum
  isWork?: boolean
  isFreelancer?: boolean
}