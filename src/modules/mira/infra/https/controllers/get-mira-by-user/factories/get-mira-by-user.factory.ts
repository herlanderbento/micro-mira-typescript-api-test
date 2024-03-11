import { GetMiraByUserUseCase } from "~/modules/mira/application";
import { MiraModel, MiraMongooseRepository } from "~/modules/mira/infra/db";
import { GetMiraByUserController } from "../get-mira-by-user.controller";


const repository = new MiraMongooseRepository(MiraModel)
const  useCase =  new  GetMiraByUserUseCase(repository)

export const getMiraByUserFactory = new GetMiraByUserController(useCase)