import { Schema, Types, model } from "mongoose";
import { AttachmentProps } from "~/modules/attachment/domain";

export type IAttachmentModelDocument = Document & {
  _id: Types.UUID;
} & AttachmentProps;

export const AttachmentModel = model(
  'Attachments',
  new Schema<IAttachmentModelDocument>({
    _id: String,
    title: {
      type: String,
      required: true,
    },
    url: {
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
