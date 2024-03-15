import {
  Career,
  CareerSearchParams,
  CareerSearchResult,
  ICareerRepository,
} from '~/modules/career/domain';
import { CareerModelMapper } from './career-model.mapper';
import { CareerModel } from './career.model';
import { NotFoundError } from '~/_shared/domain';

export class CareerMongooseRepository implements ICareerRepository {
  constructor(private careerModel: typeof CareerModel) {}

  async insert(entity: Career): Promise<void> {
    const modelProps = CareerModelMapper.toModel(entity);
    await this.careerModel.create(modelProps);
  }

  async bulkInsert(entities: Career[]): Promise<void> {
    const modelProps = entities.map(CareerModelMapper.toModel);
    await this.careerModel.insertMany(modelProps);
  }

  async findById(id: string): Promise<Career | null> {
    const model = await this.careerModel.findOne({
      _id: id,
    });

    return model ? CareerModelMapper.toEntity(model) : null;
  }

  async findManyByMiraId(
    miraId: string,
    props: CareerSearchParams
  ): Promise<CareerSearchResult> {
    const skip = (props.page - 1) * props.perPage;
    const limit = props.perPage;

    const models = await this.careerModel
      .find({
        miraId,
        ...(props.filter && {
          title: { $regex: new RegExp(props.filter, 'i') },
        }),
      })
      .skip(skip)
      .limit(limit)
      .lean();

    const count = await this.careerModel.countDocuments(models);

    return new CareerSearchResult({
      items: models.map((model) => {
        //@ts-ignore
        return CareerModelMapper.toEntity(model);
      }),
      currentPage: props.page,
      perPage: props.perPage,
      total: count,
    });
  }

  async update(entity: Career): Promise<void> {
    const modelProps = CareerModelMapper.toModel(entity);

    const affectedRows = await this.careerModel.findByIdAndUpdate(
      entity.id.toString(),
      modelProps
    );

    if (!affectedRows) {
      throw new NotFoundError(entity.id.toString(), this.getEntity());
    }
  }
  async delete(id: string): Promise<void> {
    const affectedRows = await this.careerModel.findByIdAndDelete(id);

    if (!affectedRows) {
      throw new NotFoundError(id, this.getEntity());
    }
  }

  getEntity(): new (...args: any[]) => Career {
    return Career;
  }
}
