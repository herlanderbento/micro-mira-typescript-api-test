import { EntityID } from "~/_shared/domain";

export interface CreateEducationInput {
  miraId: EntityID;
  title: string;
  institute: string;
  description?: string;
  location?: string;
  startYear: Date;
  endYear?: Date;
  isCurrent?: boolean;
}