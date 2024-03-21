import { UpdateEducationUseCase } from '~/modules/education/application';
import {
  EducationMongooseRepository,
  EducationModel,
} from '~/modules/education/infra/db';
import { UpdateEducationController } from '../update-education.controller';

const educationRepository = new EducationMongooseRepository(EducationModel);
const useCase = new UpdateEducationUseCase(educationRepository);
const updateEducationFactory = new UpdateEducationController(useCase);

export { updateEducationFactory };
