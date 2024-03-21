import {
  IUseCase,
  PaginationOutput,
  PaginationOutputMapper,
} from '~/_shared/application';
import { NotFoundError } from '~/_shared/domain';
import { IEducationRepository, EducationSearchParams, EducationSearchResult } from '~/modules/education/domain';
import { IMiraRepository, Mira } from '~/modules/mira/domain';
import { EducationOutputMapper, EducationOutputProps } from '../../common';
import { ListEducationsInput } from './list-education.input';


export class ListEducationsUseCase
  implements IUseCase<ListEducationsInput, ListEducationsOutput>
{
  constructor(
    private educationRepository: IEducationRepository,
    private miraRepository: IMiraRepository
  ) {}

  async execute(input: ListEducationsInput): Promise<ListEducationsOutput> {
    const mira = await this.miraRepository.findById(input.miraId.toString());

    if (!mira) {
      throw new NotFoundError(input.miraId, Mira);
    }

    const params = new EducationSearchParams(input);

    const education = await this.educationRepository.findManyByMiraId(
      input.miraId.toString(),
      params
    );

    return this.toOutput(education);
  }

  private toOutput(searchResult: EducationSearchResult): ListEducationsOutput {
    const { items: _items } = searchResult;
    const items = _items.map((item) => {
      return EducationOutputMapper.toOutput(item);
    });

    return PaginationOutputMapper.toOutput(items, searchResult);
  }
}

export type ListEducationsOutput = PaginationOutput<EducationOutputProps>;
