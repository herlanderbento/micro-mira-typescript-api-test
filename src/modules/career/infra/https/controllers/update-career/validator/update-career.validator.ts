import { type Request } from 'express';
import * as Yup from 'yup';
import { EntityID } from '~/_shared/domain';
import { employmentType, LocationType } from '~/modules/career/domain';

export async function updateCareerValidated(request: Request) {
  const schema = Yup.object().shape({
    id: Yup.mixed<EntityID>().required(),
    companyId: Yup.mixed<EntityID>(),
    positionId: Yup.mixed<EntityID>(),
    title: Yup.string().required(),
    companyName: Yup.string(),
    description: Yup.string(),
    location: Yup.string(),
    locationType: Yup.mixed<LocationType>()
      .oneOf(Object.values(LocationType))
      .required(),
    employmentType: Yup.mixed<employmentType>()
      .oneOf(Object.values(employmentType))
      .required(),
    startYear: Yup.date().required(),
    endYear: Yup.date(),
    isShow: Yup.boolean(),
    isCurrent: Yup.boolean(),
    isVerified: Yup.boolean(),
    createdAt: Yup.date(),
    updatedAt: Yup.date(),
  });

  return await schema.validate(
    {
      ...request.params,
      ...request.body,
    },
    { abortEarly: false, stripUnknown: true }
  );
}
