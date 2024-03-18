import {
  IRepository,
  SearchParams,
  SearchResult,
} from '~/_shared/domain';
import { Career } from './career.entity';

export type CareerFilter = string;

export class CareerSearchParams extends SearchParams<CareerFilter> {}

export class CareerSearchResult extends SearchResult<Career> {}

export interface ICareerRepository
  extends Omit<IRepository<Career>, 'findAll'> {
  findManyByMiraId(
    miraId: string,
    props: CareerSearchParams
  ): Promise<CareerSearchResult>;
}

// export interface ICareerRepository
// extends ISearchableRepository<
//   Career,
//   CareerFilter,
//   CareerSearchParams,
//   CareerSearchResult
// > {}
