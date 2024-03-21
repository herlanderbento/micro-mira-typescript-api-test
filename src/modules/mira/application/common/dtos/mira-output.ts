import { EntityID } from '~/_shared/domain';
import {
  Mira,
  EducationLevelTypeEnum,
  GenderTypeEnum,
} from '~/modules/mira/domain';

export type MiraOutputProps = {
  id: string;
  userId: EntityID;
  gender: GenderTypeEnum;
  profession: string;
  yearExperience: number;
  biography?: string | null;
  birthdate: Date;
  country?: string | null;
  city?: string | null;
  street?: string | null;
  educationLevel: EducationLevelTypeEnum;
  isWork?: boolean;
  isFreelancer?: boolean;
  coverImage?: string | null;
  createdAt: Date;
  updatedAt: Date;
};

export class MiraOutputMapper {
  static toOutput(entity: Mira): MiraOutputProps {
    return entity.toJSON();
  }
}
