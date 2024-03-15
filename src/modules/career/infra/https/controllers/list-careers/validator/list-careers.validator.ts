import { type Request } from 'express';
import * as Yup from 'yup';
import { EntityID } from '~/_shared/domain';
import { CareerFilter} from '~/modules/career/domain';

export async function listCareersValidated(request: Request) {
  const schema = Yup.object().shape({
    miraId: Yup.mixed<EntityID>().required(),
    page: Yup.number(),
    perPage: Yup.number(),
    sort: Yup.string(),
    filter: Yup.mixed<CareerFilter>(),
  });

  return await schema.validate(
    {
      ...request.params,
      ...request.query
    },
    { abortEarly: false, stripUnknown: true }
  );
}
