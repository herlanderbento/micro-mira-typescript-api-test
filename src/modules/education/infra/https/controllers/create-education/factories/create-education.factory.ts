import { CreateEducationUseCase } from '~/modules/education/application';
import {
  EducationMongooseRepository,
  EducationModel,
} from '~/modules/education/infra/db';
import { MiraMongooseRepository, MiraModel } from '~/modules/mira/infra';
import { CreateEducationController } from '../create-education.controller';

const educationRepository = new EducationMongooseRepository(EducationModel);
const mirageRepository = new MiraMongooseRepository(MiraModel);
const useCase = new CreateEducationUseCase(
  educationRepository,
  mirageRepository
);
const createEducationFactory = new CreateEducationController(useCase);

export { createEducationFactory };
