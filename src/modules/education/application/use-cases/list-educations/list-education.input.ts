import { EntityID } from "~/_shared/domain";
import { EducationFilter } from "~/modules/education/domain";

export interface ListEducationsInput {
  miraId: EntityID;
  page?: number;
  perPage?: number;
  sort?: string | null;
  filter?: EducationFilter | null;
}