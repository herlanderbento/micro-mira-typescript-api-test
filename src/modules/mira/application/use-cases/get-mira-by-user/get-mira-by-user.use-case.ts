import { IUseCase } from '~/_shared/application';
import { IMiraRepository, Mira } from '~/modules/mira/domain';
import { MiraOutputMapper, MiraOutputProps } from '../../common';
import { EntityID, NotFoundError } from '~/_shared/domain';

export interface GetMiraByUserInput {
  userId: EntityID;
}

export class GetMiraByUserUseCase
  implements IUseCase<GetMiraByUserInput, GetMiraByUserOutput>
{
  constructor(private miraRepository: IMiraRepository) {}

  async execute(input: GetMiraByUserInput): Promise<MiraOutputProps> {
    const mira = await this.miraRepository.findByUserId(input.userId.toString());

    if (!mira) {
      throw new NotFoundError(input.userId, Mira);
    }

    return MiraOutputMapper.toOutput(mira);
  }
}

export type GetMiraByUserOutput = MiraOutputProps;
