import { Attachment } from "./attachment";

export interface AttachmentsRepository {
  create(entity: Attachment): Promise<void>;
}