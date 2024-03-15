import { EntityID } from "~/_shared/domain";
import { employmentType, LocationType } from "~/modules/career/domain";

export interface UpdateCareerInput {
  id: EntityID;
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
}
