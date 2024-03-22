import { Tool } from '~/modules/tool/domain';
import { IToolModelDocument } from './tool.model';
import { EntityID } from '~/_shared/domain';

export class ToolModelMapper {
  static toModel(entity: Tool) {
    return {
      _id: entity.id,
      name: entity.name,
      code: entity.code,
      icon: entity.icon,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toEntity(model: IToolModelDocument) {
    return Tool.create(
      {
        name: model.name,
        code: model.code,
        icon: model.icon,
        createdAt: model.createdAt,
        updatedAt: model.updatedAt,
      },
      new EntityID(String(model._id))
    );
  }
}
