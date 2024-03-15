import { type Request } from 'express';
import * as Yup from 'yup';
import { EntityID } from '~/_shared/domain';

export async function deleteCareerValidated(request: Request) {
  const schema = Yup.object().shape({
    id: Yup.mixed<EntityID>().required(),
  });

  return await schema.validate(
    {
      ...request.params,
    },
    { abortEarly: false, stripUnknown: true }
  );
}
