import {
  IMiraRepository,
  Mira,
  MiraSearchParams,
  MiraSearchResult,
} from '~/modules/mira/domain';
import { MiraModel } from '../models';
import { MiraModelMapper } from '../mappers';
import { NotFoundError } from '~/_shared/domain';
import { count } from 'console';
import { update } from 'lodash';
import { models } from 'mongoose';
import { skip } from 'node:test';

export class MiraMongooseRepository implements IMiraRepository {
  constructor(private miraModel: typeof MiraModel) {}


  async insert(entity: Mira): Promise<void> {
    const model = MiraModelMapper.toModel(entity);
    await this.miraModel.create(model);
  }

  async findById(id: string): Promise<Mira | null> {
    const model = await this.miraModel.findOne({
      _id: id,
    })

    return model ? MiraModelMapper.toEntity(model) : null;
  }

  async findByUserId(userId: string): Promise<Mira | null> {
    const model = await this.miraModel.findOne({
      userId,
    })

    return model ? MiraModelMapper.toEntity(model) : null;
  }

  async update(entity: Mira): Promise<void> {
    const modelProps = MiraModelMapper.toModel(entity);

    const affectedRows = await this.miraModel.findByIdAndUpdate(
      entity.id.toString(),
      modelProps
    );

    if (!affectedRows) {
      throw new NotFoundError(entity.id.toString(), this.getEntity());
    }
  }

  async findAll(props: MiraSearchParams): Promise<MiraSearchResult> {
    const skip = (props.page - 1) * props.perPage;
    const limit = props.perPage;

    const models = await this.miraModel.find().skip(skip).limit(limit).lean();

    const count = await this.miraModel.countDocuments(models);

    return new MiraSearchResult({
      items: models.map((model) => {
        //@ts-ignore
        return MiraModelMapper.toEntity(model);
      }),
      currentPage: props.page,
      perPage: props.perPage,
      total: count,
    });
  }

  getEntity(): new (...args: any[]) => Mira {
    return Mira;
  }
}
