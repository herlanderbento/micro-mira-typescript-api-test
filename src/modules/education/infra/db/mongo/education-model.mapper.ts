import { EntityID } from '~/_shared/domain';
import { Education } from '~/modules/education/domain';
import { IEducationModelDocument } from './education.model';

export class EducationModelMapper {
  static toModel(entity: Education) {
    return {
      _id: entity.id,
      miraId: entity.miraId,
      title: entity.title,
      institute: entity.institute,
      description: entity.description,
      location: entity.location,
      startYear: entity.startYear,
      endYear: entity.endYear,
      isCurrent: entity.isCurrent,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toEntity(model: IEducationModelDocument) {
    return Education.create(
      {
        miraId: model.miraId,
        title: model.title,
        institute: model.institute,
        description: model.description,
        location: model.location,
        startYear: model.startYear,
        endYear: model.endYear,
        isCurrent: model.isCurrent,
        createdAt: model.createdAt,
        updatedAt: model.updatedAt,
      },
      new EntityID(String(model._id))
    );
  }
}
