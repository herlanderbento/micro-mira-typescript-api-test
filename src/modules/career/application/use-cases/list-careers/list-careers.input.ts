import { EntityID } from "~/_shared/domain";
import { CareerFilter } from "~/modules/career/domain";

export interface ListCareersInput {
  miraId: EntityID;
  page?: number;
  perPage?: number;
  sort?: string | null;
  filter?: CareerFilter | null;
}