import { Schema, model } from 'mongoose';
import { ToolProps } from '~/modules/tool/domain';

export type IToolModelDocument = Document & {
  _id: Schema.Types.UUID;
} & ToolProps;

export const ToolModel = model(
  'Tools',
  new Schema<IToolModelDocument>({
    _id: String,
    name: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
    },
    icon: {
      type: String,
      required: true,
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
