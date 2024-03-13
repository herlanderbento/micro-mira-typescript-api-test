import { MiraModel, MiraMongooseRepository } from "~/modules/mira/infra/db";
import { UpdateMiraUseCase } from "~/modules/mira/application";
import { UpdateMiraController } from "../update-mira.controller";


const repository = new MiraMongooseRepository(MiraModel)
const  useCase =  new  UpdateMiraUseCase(repository)

export const updateMiraFactory = new UpdateMiraController(useCase)