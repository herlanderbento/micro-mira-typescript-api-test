import { IUseCase } from '~/_shared/application';
import { EducationOutputMapper, EducationOutputProps } from '../../common';
import { CreateEducationInput } from './create-education.input';
import { Education, IEducationRepository } from '~/modules/education/domain';
import { IMiraRepository, Mira } from '~/modules/mira/domain';
import { NotFoundError } from '~/_shared/domain';

export class CreateEducationUseCase
  implements IUseCase<CreateEducationInput, CreateEducationInput>
{
  constructor(
    private educationRepository: IEducationRepository,
    private miraRepository: IMiraRepository
  ) {}
  async execute(input: CreateEducationInput): Promise<CreateEducationInput> {
    const mira = await this.miraRepository.findById(input.miraId.toString());

    if (!mira) {
      throw new NotFoundError(input.miraId, Mira);
    }

    const education = Education.create(input);

    await this.educationRepository.insert(education);

    return EducationOutputMapper.toOutput(education);
  }
}

export type CreateEducationOutput = EducationOutputProps;
