import { Career } from '~/modules/career/domain';
import { ICareerModelDocument } from './career.model';
import { EntityID } from '~/_shared/domain';

export class CareerModelMapper {
  static toModel(entity: Career) {
    return {
      _id: entity.id,
      miraId: entity.miraId,
      companyId: entity.companyId,
      positionId: entity.positionId,
      title: entity.title,
      companyName: entity.companyName,
      description: entity.description,
      location: entity.location,
      locationType: entity.locationType,
      employmentType: entity.employmentType,
      startYear: entity.startYear,
      endYear: entity.endYear,
      isShow: entity.isShow,
      isCurrent: entity.isCurrent,
      isVerified: entity.isVerified,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toEntity(model: ICareerModelDocument) {
    return Career.create(
      {
        miraId: model.miraId,
        companyId: model.companyId,
        positionId: model.positionId,
        title: model.title,
        companyName: model.companyName,
        description: model.description,
        location: model.location,
        locationType: model.locationType,
        employmentType: model.employmentType,
        startYear: model.startYear,
        endYear: model.endYear,
        isShow: model.isShow,
        isCurrent: model.isCurrent,
        isVerified: model.isVerified,
        createdAt: model.createdAt,
        updatedAt: model.updatedAt,
      },
      new EntityID(String(model._id))
    );
  }
}
