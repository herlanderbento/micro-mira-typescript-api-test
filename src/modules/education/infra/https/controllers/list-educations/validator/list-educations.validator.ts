import { type Request } from 'express';
import * as Yup from 'yup';
import { EntityID } from '~/_shared/domain';
import { EducationFilter } from '~/modules/education/domain';

export async function listEducationsValidated(request: Request) {
  const schema = Yup.object().shape({
    miraId: Yup.mixed<EntityID>().required(),
    page: Yup.number(),
    perPage: Yup.number(),
    sort: Yup.string(),
    filter: Yup.mixed<EducationFilter>(),
  });

  return await schema.validate(
    {
      ...request.params,
      ...request.query
    },
    { abortEarly: false, stripUnknown: true }
  );
}
