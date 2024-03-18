import { Education, EducationProps } from '~/modules/education/domain';

export type EducationOutputProps = EducationProps;

export class EducationOutputMapper {
  static toOutput(entity: Education): EducationOutputProps {
    return entity.toJSON();
  }
}
