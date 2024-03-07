import { EntityID } from '~/_shared/domain';
import {
  GenderEnum,
  EducationLevelEnum,
  Mira,
  Address,
} from '~/modules/mira/domain';

export type MiraOutputProps = {
  userId: EntityID
  gender: GenderEnum
  profession: string
  yearExperience: number
  biography: string
  birthdate: Date
  address: Address
  educationLevel: EducationLevelEnum
  isWork?: boolean
  isFreelancer?: boolean
  coverImage?: string
  createdAt: Date
  updatedAt: Date
}

export class MiraOutputMapper {
  static toOutput(entity: Mira): MiraOutputProps {
    return entity.toJSON();
  }
}
