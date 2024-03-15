import { IUseCase } from '~/_shared/application';
import { CareerOutputMapper, CareerOutputProps } from '../../common';
import { CreateCareerInput } from './create-career.input';
import { Career, ICareerRepository } from '~/modules/career/domain';
import { IMiraRepository, Mira } from '~/modules/mira/domain';
import { NotFoundError } from '~/_shared/domain';

export class CreateCareerUseCase
  implements IUseCase<CreateCareerInput, CreateCareerOutput>
{
  constructor(
    private careerRepository: ICareerRepository,
    private miraRepository: IMiraRepository
  ) {}

  async execute(input: CreateCareerInput): Promise<CareerOutputProps> {
    const mira = await this.miraRepository.findById(input.miraId.toString());

    if (!mira) {
      throw new NotFoundError(input.miraId, Mira);
    }

    const career = Career.create(input);

    await this.careerRepository.insert(career);

    return CareerOutputMapper.toOutput(career);
  }
}

export type CreateCareerOutput = CareerOutputProps;
