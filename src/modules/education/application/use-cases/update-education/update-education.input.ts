import { EntityID } from "~/_shared/domain";

export interface UpdateEducationInput {
  id: EntityID;
  title: string;
  institute: string;
  description?: string;
  location?: string;
  startYear: Date;
  endYear?: Date;
  isCurrent?: boolean;
}
