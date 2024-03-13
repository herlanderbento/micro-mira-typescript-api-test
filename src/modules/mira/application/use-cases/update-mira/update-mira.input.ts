import { EntityID } from "~/_shared/domain"
import { GenderTypeEnum, EducationLevelTypeEnum, Address } from "~/modules/mira/domain"

export type UpdateMiraInput = {
  id: EntityID
  gender: GenderTypeEnum
  profession: string
  yearExperience: number
  biography?: string
  birthdate: Date
  address: Address
  educationLevel: EducationLevelTypeEnum
  isWork?: boolean
  isFreelancer?: boolean
}