import { DeleteEducationUseCase } from '~/modules/education/application';
import { EducationMongooseRepository, EducationModel } from '~/modules/education/infra/db';
import { DeleteEducationController } from '../delete-education.controller';

const educationRepository = new EducationMongooseRepository(EducationModel);
const useCase = new DeleteEducationUseCase(educationRepository);
const deleteEducationFactory = new DeleteEducationController(useCase);

export { deleteEducationFactory };
