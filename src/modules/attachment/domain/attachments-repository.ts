import { Attachment } from "./attachment";

export interface AttachmentsRepository {
  insert(entity: Attachment): Promise<void>;
}