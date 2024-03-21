import { IUseCase } from '~/_shared/application';
import { EntityID, NotFoundError } from '~/_shared/domain';
import { Education, IEducationRepository } from '~/modules/education/domain';

export type DeleteEducationInput = {
  id: EntityID;
};

export class DeleteEducationUseCase
  implements IUseCase<DeleteEducationInput, DeleteEducationOutput>
{
  constructor(private educationRepository: IEducationRepository) {}

  async execute(input: DeleteEducationInput): Promise<DeleteEducationOutput> {
    const education = await this.educationRepository.findById(input.id.toString());

    if (!education) {
      throw new NotFoundError(input.id.toString(), Education);
    }

    await this.educationRepository.delete(input.id.toString());
  }
}

export type DeleteEducationOutput = void;
