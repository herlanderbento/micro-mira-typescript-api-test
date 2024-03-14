import {
  IUseCase,
  PaginationOutput,
  PaginationOutputMapper,
} from '~/_shared/application';
import { MiraOutputMapper, MiraOutputProps } from '../../common';
import { ListMirasInput } from './list-miras.input';
import {
  IMiraRepository,
  MiraSearchParams,
  MiraSearchResult,
} from '~/modules/mira/domain';

export class ListMirasUseCase
  implements IUseCase<ListMirasInput, ListMirasOutput>
{
  constructor(private miraRepository: IMiraRepository) {}

  async execute(input: ListMirasInput): Promise<ListMirasOutput> {
    const params = new MiraSearchParams(input);
    const searchResult = await this.miraRepository.findAll(params);
    return this.toOutput(searchResult);
  }

  private toOutput(searchResult: MiraSearchResult): ListMirasOutput {
    const { items: _items } = searchResult;
    const items = _items.map((item) => {
      return MiraOutputMapper.toOutput(item);
    });
    return PaginationOutputMapper.toOutput(items, searchResult);
  }
}

export type ListMirasOutput = PaginationOutput<MiraOutputProps>;
