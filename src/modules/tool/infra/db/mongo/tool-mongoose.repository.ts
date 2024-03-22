import {
  IToolRepository,
  Tool,
  ToolSearchParams,
  ToolSearchResult,
} from '~/modules/tool/domain';
import { ToolModelMapper } from './tool-model.mapper';
import { ToolModel } from './tool.model';
import { NotFoundError } from '~/_shared/domain';

export class ToolMongooseRepository implements IToolRepository {
  async insert(entity: Tool): Promise<void> {
    const modelProps = ToolModelMapper.toModel(entity);
    await ToolModel.create(modelProps);
  }
  async bulkInsert(entities: Tool[]): Promise<void> {
    const modelProps = entities.map(ToolModelMapper.toModel);
    await ToolModel.insertMany(modelProps);
  }
  async findById(id: string): Promise<Tool | null> {
    const model = await ToolModel.findOne({
      _id: id,
    });

    return model ? ToolModelMapper.toEntity(model) : null;
  }
  async findAll(): Promise<Tool[]> {
    const models = await ToolModel.find();
    return models.map(ToolModelMapper.toEntity);
  }
  async findByName(name: string): Promise<Tool | null> {
    const model = await ToolModel.findOne({
      name,
    });

    return model ? ToolModelMapper.toEntity(model) : null;
  }
  async search(props: ToolSearchParams): Promise<ToolSearchResult> {
    const skip = (props.page - 1) * props.perPage;
    const limit = props.perPage;

    const models = await ToolModel.find({
      ...(props.filter && {
        name: { $regex: new RegExp(props.filter, 'i') },
      }),
    })
      .skip(skip)
      .limit(limit)
      .lean();

    const count = await ToolModel.countDocuments(models);

    return new ToolSearchResult({
      items: models.map((model) => {
        //@ts-ignore
        return ToolModelMapper.toEntity(model);
      }),
      currentPage: props.page,
      perPage: props.perPage,
      total: count,
    });
  }

  async update(entity: Tool): Promise<void> {
    const modelProps = ToolModelMapper.toModel(entity);

    const affectedRows = await ToolModel.findByIdAndUpdate(
      entity.id.toString(),
      modelProps
    );

    if (!affectedRows) {
      throw new NotFoundError(entity.id.toString(), this.getEntity());
    }
  }
  async delete(id: string): Promise<void> {
    const affectedRows = await ToolModel.findByIdAndDelete(id);

    if (!affectedRows) {
      throw new NotFoundError(id, this.getEntity());
    }
  }
  getEntity(): new (...args: any[]) => Tool {
    return Tool;
  }
}
