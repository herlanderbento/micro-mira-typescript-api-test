import { type Request } from 'express';
import * as Yup from 'yup';
import { EntityID } from '~/_shared/domain';
import { CreateEducationInput } from '~/modules/education/application';

export async function createEducationValidated(request: Request) {
  const schema = Yup.object().shape({
    miraId: Yup.mixed<EntityID>().required(),
    title: Yup.string().required(),
    institute: Yup.string(),
    description: Yup.string(),
    location: Yup.string(),
    startYear: Yup.date().required(),
    endYear: Yup.date(),
    isCurrent: Yup.boolean(),
  });

  return (await schema.validate(
    {
      ...request.body,
    },
    { abortEarly: false, stripUnknown: true }
  )) as CreateEducationInput;
}
