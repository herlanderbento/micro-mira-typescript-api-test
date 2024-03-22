import { Schema, Types, model } from 'mongoose';
import {
  CareerProps,
  employmentType,
  LocationType,
} from '~/modules/career/domain';

export type ICareerModelDocument = Document & {
  _id: Types.UUID;
} & CareerProps;

export const CareerModel = model(
  'careers',
  new Schema<ICareerModelDocument>({
    _id: String,
    miraId: {
      type: String,
      required: true,
      ref: 'miras'
    },
    companyId: {
      type: String,
      default: null,
    },
    positionId: {
      type: String,
      default: null,
    },
    title: {
      type: String,
      required: true,
    },
    companyName: {
      type: String,
      default: null,
    },
    description: {
      type: String,
      default: null,
    },
    location: {
      type: String,
      default: null,
    },
    locationType: {
      type: String,
      enum: LocationType,
      required: true,
    },
    employmentType: {
      type: String,
      enum: employmentType,
      required: true,
    },
    startYear: {
      type: Date,
      required: true,
    },
    endYear: {
      type: Date,
      default: null,
    },
    isShow: {
      type: Boolean,
      default: true,
    },
    isCurrent: {
      type: Boolean,
      default: false,
    },
    isVerified: {
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
