import { ListCareersUseCase } from "~/modules/career/application";
import { CareerMongooseRepository, CareerModel } from "~/modules/career/infra/db";
import { MiraMongooseRepository, MiraModel } from "~/modules/mira/infra";
import { ListCareersController } from "../list-careers.controller";


const careerRepository = new CareerMongooseRepository(CareerModel);
const mirageRepository = new MiraMongooseRepository(MiraModel);
const useCase = new ListCareersUseCase(careerRepository, mirageRepository);
const listCareersFactory = new ListCareersController(useCase);

export { listCareersFactory };
