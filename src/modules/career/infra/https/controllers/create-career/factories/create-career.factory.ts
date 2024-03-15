import { MiraModel, MiraMongooseRepository } from '~/modules/mira/infra';
import { CreateCareerUseCase } from '~/modules/career/application';
import { CareerMongooseRepository, CareerModel } from '~/modules/career/infra/db';
import { CreateCareerController } from '../create-career.controller';

const careerRepository = new CareerMongooseRepository(CareerModel);
const mirageRepository = new MiraMongooseRepository(MiraModel);
const useCase = new CreateCareerUseCase(careerRepository, mirageRepository);
const createCareerFactory = new CreateCareerController(useCase);

export { createCareerFactory };
