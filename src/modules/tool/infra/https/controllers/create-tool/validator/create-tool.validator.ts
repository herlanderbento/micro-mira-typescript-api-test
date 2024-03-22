import { type Request } from 'express';
import * as Yup from 'yup';
import { EntityID } from '~/_shared/domain';
import {
  Address,
  EducationLevelTypeEnum,
  GenderTypeEnum,
} from '~/modules/mira/domain';

export async function createToolValidated(request: Request) {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    code: Yup.string().required(),
    icon: Yup.string().required(),
  });

  return await schema.validate(
    {
      ...request.body,
    },
    { abortEarly: false, stripUnknown: true }
  );
}
