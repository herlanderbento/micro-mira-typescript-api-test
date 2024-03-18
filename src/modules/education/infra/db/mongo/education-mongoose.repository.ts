import { NotFoundError } from '~/_shared/domain';
import {
  IEducationRepository,
  Education,
  EducationSearchParams,
  EducationSearchResult,
} from '~/modules/education/domain';
import { EducationModelMapper } from './education-model.mapper';
import { EducationModel } from './education.model';

export class EducationMongooseRepository implements IEducationRepository {
  constructor(private educationModel: typeof EducationModel) {}

  async insert(entity: Education): Promise<void> {
    const modelProps = EducationModelMapper.toModel(entity);
    await this.educationModel.create(modelProps);
  }

  async bulkInsert(entities: Education[]): Promise<void> {
    const modelProps = entities.map(EducationModelMapper.toModel);
    await this.educationModel.insertMany(modelProps);
  }

  async findById(id: string): Promise<Education | null> {
    const model = await this.educationModel.findOne({
      _id: id,
    });

    return model ? EducationModelMapper.toEntity(model) : null;
  }

  async findManyByMiraId(
    miraId: string,
    props: EducationSearchParams
  ): Promise<EducationSearchResult> {
    const skip = (props.page - 1) * props.perPage;
    const limit = props.perPage;

    const models = await this.educationModel
      .find({
        miraId,
        ...(props.filter && {
          title: { $regex: new RegExp(props.filter, 'i') },
        }),
      })
      .skip(skip)
      .limit(limit)
      .lean();

    const count = await this.educationModel.countDocuments(models);

    return new EducationSearchResult({
      items: models.map((model) => {
        //@ts-ignore
        return EducationModelMapper.toEntity(model);
      }),
      currentPage: props.page,
      perPage: props.perPage,
      total: count,
    });
  }

  async update(entity: Education): Promise<void> {
    const modelProps = EducationModelMapper.toModel(entity);

    const affectedRows = await this.educationModel.findByIdAndUpdate(
      entity.id.toString(),
      modelProps
    );

    if (!affectedRows) {
      throw new NotFoundError(entity.id.toString(), this.getEntity());
    }
  }

  async delete(id: string): Promise<void> {
    const affectedRows = await this.educationModel.findByIdAndDelete(id);

    if (!affectedRows) {
      throw new NotFoundError(id, this.getEntity());
    }
  }

  getEntity(): new (...args: any[]) => Education {
    return Education;
  }
}
