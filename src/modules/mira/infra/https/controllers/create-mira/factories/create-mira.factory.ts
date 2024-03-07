import { CreateMiraUseCase } from "~/modules/mira/application";
import { MiraModel, MiraMongooseRepository } from "~/modules/mira/infra/db";
import { CreateMiraController } from "../create-mira.controller";


const repository = new MiraMongooseRepository(MiraModel)
const  useCase =  new  CreateMiraUseCase(repository)

export const createMiraFactory = new CreateMiraController(useCase)