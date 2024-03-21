import { ListEducationsUseCase } from '~/modules/education/application';
import {
  EducationMongooseRepository,
  EducationModel,
} from '~/modules/education/infra/db';
import { MiraMongooseRepository, MiraModel } from '~/modules/mira/infra';
import { ListEducationsController } from '../list-educations.controller';

const educationRepository = new EducationMongooseRepository(EducationModel);
const mirageRepository = new MiraMongooseRepository(MiraModel);
const useCase = new ListEducationsUseCase(
  educationRepository,
  mirageRepository
);
const listEducationsFactory = new ListEducationsController(useCase);

export { listEducationsFactory };
