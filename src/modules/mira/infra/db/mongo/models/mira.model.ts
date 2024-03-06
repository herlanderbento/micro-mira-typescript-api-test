import { Schema, Types, model } from 'mongoose';
import {
  EducationLevelEnum,
  GenderEnum,
  MiraProps,
} from '~/modules/mira/domain';

export type IMiraModelDocument = Document & {
  _id: Types.UUID;
} & MiraProps;

export const MiraModel = model<IMiraModelDocument>(
  'mira',
  new Schema({
    _id: String,
    userId: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: true,
      enum: GenderEnum,
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
    birthDate: {
      type: Date,
      required: true,
    },
    address: {
      country: String,
      city: String,
      street: String,
    },
    educationLevel: {
      type: String,
      required: true,
      enum: EducationLevelEnum,
    },
    isWork: Boolean,
    isFreelancer: Boolean,
    coverImage: String,
    createdAt: Date,
    updatedAt: Date,
  })
);
