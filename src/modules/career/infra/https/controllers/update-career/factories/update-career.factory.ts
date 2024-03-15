import { UpdateCareerUseCase } from "~/modules/career/application";
import { CareerMongooseRepository, CareerModel } from "~/modules/career/infra/db";
import { UpdateCareerController } from "../update-career.controller";


const careerRepository = new CareerMongooseRepository(CareerModel);
const useCase = new UpdateCareerUseCase(careerRepository);
const updateCareerFactory = new UpdateCareerController(useCase);

export { updateCareerFactory };
