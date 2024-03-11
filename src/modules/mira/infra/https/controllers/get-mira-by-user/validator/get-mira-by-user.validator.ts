import { type Request } from 'express';
import * as Yup from 'yup';
import { EntityID } from '~/_shared/domain';
import {
  Address,
  EducationLevelTypeEnum,
  GenderTypeEnum,
} from '~/modules/mira/domain';

export async function getMiraByUserValidated(request: Request) {
  const schema = Yup.object().shape({
    userId: Yup.mixed<EntityID>().required(),
  });

  return await schema.validate(
    {
      ...request.params,
    },
    { abortEarly: false, stripUnknown: true }
  );
}
