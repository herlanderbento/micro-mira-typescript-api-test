import { GetMiraUseCase } from "~/modules/mira/application";
import { MiraModel, MiraMongooseRepository } from "~/modules/mira/infra/db";
import { GetMiraController } from "../get-mira.controller";

const repository = new MiraMongooseRepository(MiraModel)
const  useCase =  new  GetMiraUseCase(repository)

export const getMiraFactory = new GetMiraController(useCase)