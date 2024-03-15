import { DeleteCareerUseCase } from '~/modules/career/application';
import {
  CareerMongooseRepository,
  CareerModel,
} from '~/modules/career/infra/db';
import { DeleteCareerController } from '../delete-career.controller';

const careerRepository = new CareerMongooseRepository(CareerModel);
const useCase = new DeleteCareerUseCase(careerRepository);
const deleteCareerFactory = new DeleteCareerController(useCase);

export { deleteCareerFactory };
