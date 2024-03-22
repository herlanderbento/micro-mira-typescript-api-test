import { Tool } from '~/modules/tool/domain';

export type ToolOutputProps = {
  id: string;
  name: string;
  code: string;
  icon: string;
  createdAt: Date;
  updatedAt: Date;
};

export class ToolOutputMapper {
  static toOutput(entity: Tool): ToolOutputProps {
    return entity.toJSON();
  }
}
