import { Schema, Types, model } from 'mongoose';
import { EducationProps } from '~/modules/education/domain';
import { MiraModel } from '~/modules/mira/infra';

export type IEducationModelDocument = Document & {
  _id:Schema.Types.UUID;
} & EducationProps;

export const EducationModel = model(
  'Educations',
  new Schema<IEducationModelDocument>({
    _id:Schema.Types.UUID,
    miraId: {
      type:Schema.Types.UUID,
      required: true,
      ref: MiraModel
    },
    title: {
      type: String,
      required: true,
    },
    institute: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    startYear: {
      type: Date,
      required: true,
    },
    endYear: {
      type: Date,
      default: null,
    },
    isCurrent: {
      type: Boolean,
      default: false,
    },
    createdAt: {
      type: Date,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  })
);
