import { ToolMongooseRepository } from '~/modules/tool/infra/db';
import { CreateToolController } from '../create-tool.controller';
import { CreateToolUseCase } from '~/modules/tool/application';

const repository = new ToolMongooseRepository();
const useCase = new CreateToolUseCase(repository);

export const createToolFactory = new CreateToolController(useCase);
