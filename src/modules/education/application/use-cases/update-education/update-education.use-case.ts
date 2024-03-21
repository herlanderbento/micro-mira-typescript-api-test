import { IUseCase } from '~/_shared/application';
import {
  Education,
  EducationProps,
  IEducationRepository,
} from '~/modules/education/domain';
import { EducationOutputMapper } from '../../common';
import { NotFoundError } from '~/_shared/domain';
import { UpdateEducationInput } from './update-education.input';

export class UpdateEducationUseCase
  implements IUseCase<UpdateEducationInput, UpdateEducationOutput>
{
  constructor(private educationRepository: IEducationRepository) {}
  async execute(input: UpdateEducationInput): Promise<UpdateEducationOutput> {
    const education = await this.educationRepository.findById(
      input.id.toString()
    );

    if (!education) {
      throw new NotFoundError(input.id.toString(), Education);
    }

    education.update(input);

    await this.educationRepository.update(education);

    return EducationOutputMapper.toOutput(education);
  }
}

export type UpdateEducationOutput = EducationProps;
