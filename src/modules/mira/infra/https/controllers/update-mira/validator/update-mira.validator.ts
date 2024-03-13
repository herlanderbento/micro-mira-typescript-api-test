import { type Request } from 'express';
import * as Yup from 'yup';
import { EntityID } from '~/_shared/domain';
import {
  Address,
  EducationLevelTypeEnum,
  GenderTypeEnum,
} from '~/modules/mira/domain';

export async function updateMiraValidated(request: Request) {
  const schema = Yup.object().shape({
    id: Yup.mixed<EntityID>().required(),
    gender: Yup.mixed<GenderTypeEnum>()
      .oneOf(Object.values(GenderTypeEnum))
      .required(),
    profession: Yup.string().required(),
    yearExperience: Yup.number().required(),
    biography: Yup.string(),
    birthdate: Yup.date().required(),
    address: Yup.object().shape({
      country: Yup.string(),
      city: Yup.string(),
      street: Yup.string(),
    }).transform((originalValue, originalObject) => {
      if (originalValue instanceof Address) {
        return originalValue;
      }
      return Address.create(originalObject);
    }).required(),
    
    educationLevel: Yup.mixed<EducationLevelTypeEnum>()
      .oneOf(Object.values(EducationLevelTypeEnum))
      .required(),
    isWork: Yup.boolean(),
    isFreelancer: Yup.boolean(),
  });

  return await schema.validate(
    {
      ...request.params,
      ...request.body,
    },
    { abortEarly: false, stripUnknown: true }
  );
}
