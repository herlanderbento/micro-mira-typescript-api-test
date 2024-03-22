import { IUseCase } from '~/_shared/application';
import {
  ToolAlreadyExistsError,
  ToolOutputMapper,
  ToolOutputProps,
} from '../../common';
import { CreateToolInput } from './create-tool.input';
import { IToolRepository, Tool } from '~/modules/tool/domain';

export class CreateToolUseCase
  implements IUseCase<CreateToolInput, CreateToolOutput>
{
  constructor(private toolRepository: IToolRepository) {}
  async execute(input: CreateToolInput): Promise<ToolOutputProps> {
    const toolWithSameName = await this.toolRepository.findByName(input.name);

    if (toolWithSameName) {
      throw new ToolAlreadyExistsError();
    }

    const tool = Tool.create(input);

    await this.toolRepository.insert(tool);

    return ToolOutputMapper.toOutput(tool);
  }
}

export type CreateToolOutput = ToolOutputProps;
