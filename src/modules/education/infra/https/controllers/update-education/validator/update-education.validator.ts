import { type Request } from 'express';
import * as Yup from 'yup';
import { EntityID } from '~/_shared/domain';

export async function updateEducationValidated(request: Request) {
  const schema = Yup.object().shape({
    id: Yup.mixed<EntityID>().required(),
    title: Yup.string().required(),
    institute: Yup.string().required(),
    description: Yup.string(),
    location: Yup.string(),
    startYear: Yup.date().required(),
    endYear: Yup.date(),
    isCurrent: Yup.boolean(),
  });

  return await schema.validate(
    {
      ...request.params,
      ...request.body,
    },
    { abortEarly: false, stripUnknown: true }
  );
}
