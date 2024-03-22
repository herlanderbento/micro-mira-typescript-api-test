import {
  ISearchableRepository,
  SearchParams,
  SearchResult,
} from '~/_shared/domain';
import { Tool } from './tools.entity';

export type ToolFilter = string;

export class ToolSearchParams extends SearchParams<ToolFilter> {}

export class ToolSearchResult extends SearchResult<Tool> {}

export interface IToolRepository
  extends ISearchableRepository<
    Tool,
    ToolFilter,
    ToolSearchParams,
    ToolSearchResult
  > {
  findByName(name: string): Promise<Tool | null>;
}
