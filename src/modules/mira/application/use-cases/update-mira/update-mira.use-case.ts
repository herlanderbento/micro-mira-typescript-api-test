import { IUseCase } from '~/_shared/application';
import { IMiraRepository, Mira } from '~/modules/mira/domain';
import { MiraOutputMapper, MiraOutputProps } from '../../common';
import { UpdateMiraInput } from './update-mira.input';
import { NotFoundError } from '~/_shared/domain';

export class UpdateMiraUseCase
  implements IUseCase<UpdateMiraInput, UpdateMiraOutput>
{
  constructor(private miraRepository: IMiraRepository) { }

  async execute(input: UpdateMiraInput): Promise<UpdateMiraOutput> {
    const mira = await this.miraRepository.findById(input.id.toString());

    if (!mira) {
      throw new NotFoundError(input.id.toString(), Mira);
    }

    mira.update(input);

    if (input.isWork == true) {
      mira.work()
    }

    if (input.isFreelancer == false) {
      mira.unwork()
    }

    await this.miraRepository.update(mira);

    return MiraOutputMapper.toOutput(mira);
  }
}

export type UpdateMiraOutput = MiraOutputProps;
