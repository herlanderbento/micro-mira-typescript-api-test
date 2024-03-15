import { EntityID } from '~/_shared/domain';
import { Career, employmentType, LocationType } from '~/modules/career/domain';

export type CareerOutputProps = {
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

export class CareerOutputMapper {
  static toOutput(entity: Career): CareerOutputProps {
    return entity.toJSON();
  }
}
