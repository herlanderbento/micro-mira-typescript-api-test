import {
  IRepository,
  ISearchableRepository,
  SearchParams,
  SearchResult,
} from '~/_shared/domain';
import { Mira } from '../entities';

export type MiraFilter = string;

export class MiraSearchParams extends SearchParams<MiraFilter> {}

export class MiraSearchResult extends SearchResult<Mira> {}

export interface IMiraRepository
  extends Omit<IRepository<Mira>, 'delete' | 'findAll' | 'bulkInsert'> {
  findAll(props: MiraSearchParams): Promise<MiraSearchResult>;
}
