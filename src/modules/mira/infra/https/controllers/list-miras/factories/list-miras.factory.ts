import { ListMirasUseCase } from "~/modules/mira/application"
import { MiraMongooseRepository, MiraModel } from "~/modules/mira/infra/db"
import { ListMirasController } from "../list-miras.controller"


const repository = new MiraMongooseRepository(MiraModel)
const useCase = new ListMirasUseCase(repository)

export const listMirasFactory = new ListMirasController(useCase)