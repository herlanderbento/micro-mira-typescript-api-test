import { Mira } from '~/modules/mira/domain';
import { IMiraModelDocument } from '../models';
import { EntityID } from '~/_shared/domain';

export class MiraModelMapper {
  static toModel(entity: Mira) {
    return {
      _id: entity.id,
      userId: entity.userId,
      gender: entity.gender,
      profession: entity.profession,
      yearExperience: entity.yearExperience,
      biography: entity.biography,
      birthdate: entity.birthdate,
      address: entity.address,
      educationLevel: entity.educationLevel,
      isWork: entity.isWork,
      isFreelancer: entity.isFreelancer,
      coverImage: entity.coverImage,
      createdAt: entity.createdAt,
      updatedAt: entity.updatedAt,
    };
  }

  static toEntity(model: IMiraModelDocument): Mira {
    const mira = new Mira(model, new EntityID(String(model._id)));
    return mira;
  }
}