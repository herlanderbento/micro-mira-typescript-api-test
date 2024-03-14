import { SortDirection } from "~/_shared/domain";
import { MiraFilter } from "~/modules/mira/domain";

export type ListMirasInput = {
  page?: number;
  perPage?: number;
  sort?: string | null;
  sortDir?: SortDirection | null;
  filter?: MiraFilter | null;
};
