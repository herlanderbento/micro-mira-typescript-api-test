import {
  ISearchableRepository,
  SearchParams,
  SearchResult,
} from '~/_shared/domain';
import { Mira } from '../entities';

export type MiraFilter = string;

export class MiraSearchParams extends SearchParams<MiraFilter> {}

export class MiraSearchResult extends SearchResult<Mira> {}

export interface IMiraRepository
  extends Omit<
    ISearchableRepository<Mira, MiraFilter, MiraSearchParams, MiraSearchResult>,
    'delete' | 'findAll' | 'bulkInsert'
  > {}
