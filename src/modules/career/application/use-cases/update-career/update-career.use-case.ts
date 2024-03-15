import { IUseCase } from '~/_shared/application';
import {
  Career,
  CareerProps,
  ICareerRepository,
} from '~/modules/career/domain';
import { UpdateCareerInput } from './update-career.input';
import { NotFoundError } from '~/_shared/domain';
import { CareerOutputMapper } from '../../common';

export class UpdateCareerUseCase
  implements IUseCase<UpdateCareerInput, UpdateCareerOutput>
{
  constructor(private careerRepository: ICareerRepository) {}
  async execute(input: UpdateCareerInput): Promise<CareerProps> {
    const career = await this.careerRepository.findById(input.id.toString());

    if (!career) {
      throw new NotFoundError(input.id.toString(), Career);
    }

    career.update(input);

    await this.careerRepository.update(career);

    return CareerOutputMapper.toOutput(career);
  }
}

export type UpdateCareerOutput = CareerProps;
