import { IUseCase } from '~/_shared/application';
import { CreateMiraInput } from './create-mira.input';
import { IMiraRepository, Mira } from '~/modules/mira/domain';
import {
  MiraAlreadyExistsError,
  MiraOutputMapper,
  MiraOutputProps,
} from '../../common';

export class CreateMiraUseCase
  implements IUseCase<CreateMiraInput, CreateMiraOutput>
{
  constructor(private miraRepository: IMiraRepository) {}

  async execute(input: CreateMiraInput): Promise<CreateMiraOutput> {
    const miraAlreadyExists = await this.miraRepository.findByUserId(
      input.userId.toString()
    );

    if (miraAlreadyExists) {
      throw new MiraAlreadyExistsError();
    }

    const mira = Mira.create(input);

    await this.miraRepository.insert(mira);

    return MiraOutputMapper.toOutput(mira);
  }
}

export type CreateMiraOutput = MiraOutputProps;
