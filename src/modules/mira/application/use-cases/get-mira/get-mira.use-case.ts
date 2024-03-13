import { IUseCase } from '~/_shared/application';
import { IMiraRepository, Mira } from '~/modules/mira/domain';
import { MiraOutputMapper, MiraOutputProps } from '../../common';
import { EntityID, NotFoundError } from '~/_shared/domain';

export interface GetMiraInput {
  id: EntityID;
}

export class GetMiraUseCase
  implements IUseCase<GetMiraInput, GetMiraOutput>
{
  constructor(private miraRepository: IMiraRepository) {}

  async execute(input: GetMiraInput): Promise<MiraOutputProps> {
    const mira = await this.miraRepository.findById(input.id.toString());

    if (!mira) {
      throw new NotFoundError(input.id, Mira);
    }

    return MiraOutputMapper.toOutput(mira);
  }
}

export type GetMiraOutput = MiraOutputProps;
