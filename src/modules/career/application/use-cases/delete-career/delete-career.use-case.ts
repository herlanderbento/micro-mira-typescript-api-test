import { IUseCase } from '~/_shared/application';
import { EntityID, NotFoundError } from '~/_shared/domain';
import { Career, ICareerRepository } from '~/modules/career/domain';

export type DeleteCareerInput = {
  id: EntityID;
};

export class DeleteCareerUseCase
  implements IUseCase<DeleteCareerInput, DeleteCareerOutput>
{
  constructor(private careerRepository: ICareerRepository) {}

  async execute(input: DeleteCareerInput): Promise<DeleteCareerOutput> {
    const career = await this.careerRepository.findById(input.id.toString());

    if (!career) {
      throw new NotFoundError(input.id.toString(), Career);
    }

    await this.careerRepository.delete(input.id.toString());
  }
}

export type DeleteCareerOutput = void;
