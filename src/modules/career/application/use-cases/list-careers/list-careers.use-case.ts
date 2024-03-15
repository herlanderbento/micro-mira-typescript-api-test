import {
  IUseCase,
  PaginationOutput,
  PaginationOutputMapper,
} from '~/_shared/application';
import {
  CareerSearchParams,
  CareerSearchResult,
  ICareerRepository,
} from '~/modules/career/domain';
import { CareerOutputMapper, CareerOutputProps } from '../../common';
import { ListCareersInput } from './list-careers.input';
import { IMiraRepository, Mira } from '~/modules/mira/domain';
import { NotFoundError } from '~/_shared/domain';

export class ListCareersUseCase
  implements IUseCase<ListCareersInput, ListCareersOutput>
{
  constructor(
    private careerRepository: ICareerRepository,
    private miraRepository: IMiraRepository
  ) {}

  async execute(input: ListCareersInput): Promise<ListCareersOutput> {
    const mira = await this.miraRepository.findById(input.miraId.toString());

    if (!mira) {
      throw new NotFoundError(input.miraId, Mira);
    }

    const params = new CareerSearchParams(input);

    const career = await this.careerRepository.findManyByMiraId(
      input.miraId.toString(),
      params
    );

    return this.toOutput(career);
  }

  private toOutput(searchResult: CareerSearchResult): ListCareersOutput {
    const { items: _items } = searchResult;
    const items = _items.map((item) => {
      return CareerOutputMapper.toOutput(item);
    });

    return PaginationOutputMapper.toOutput(items, searchResult);
  }
}

export type ListCareersOutput = PaginationOutput<CareerOutputProps>;
