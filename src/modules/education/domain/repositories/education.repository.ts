import { IRepository, SearchParams, SearchResult } from '~/_shared/domain';
import { Education } from '../entities';

export type EducationFilter = string;

export class EducationSearchParams extends SearchParams<EducationFilter> {}

export class EducationSearchResult extends SearchResult<Education> {}

export interface IEducationRepository
  extends Omit<IRepository<Education>, 'findAll'> {
  findManyByMiraId(
    miraId: string,
    props: EducationSearchParams
  ): Promise<EducationSearchResult>;
}
