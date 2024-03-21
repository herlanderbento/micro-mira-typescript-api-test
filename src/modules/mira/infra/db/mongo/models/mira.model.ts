import { Schema, Types, model } from 'mongoose';
import {
  EducationLevelTypeEnum,
  GenderTypeEnum,
  MiraProps,
} from '~/modules/mira/domain';

export type IMiraModelDocument = Document & {
  _id: Types.UUID;
} & MiraProps;

export const MiraModel = model<IMiraModelDocument>(
  'miras',
  new Schema({
    _id: String,
    userId: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: GenderTypeEnum,
    },
    profession: {
      type: String,
      required: true,
    },
    yearExperience: {
      type: Number,
      required: true,
    },
    biography: {
      type: String,
      required: true,
    },
    birthdate: {
      type: Date,
      required: true,
    },
    country: {
      type: String,
      default: null
    },
    city: {
      type: String,
      default: null
    },
    street: {
      type: String,
      default: null
    },
    educationLevel: {
      type: String,
      required: true,
      enum: EducationLevelTypeEnum,
    },
    isWork: Boolean,
    isFreelancer: Boolean,
    coverImage: String,
    createdAt: Date,
    updatedAt: Date,
  })
);
