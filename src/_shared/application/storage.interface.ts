export interface IStorage {
  store(object: {
    data: Buffer;
    mimeType?: string;
    id: string;
  }): Promise<void>;

  get(id: string): Promise<{ data: Buffer; mimeType: string | undefined }>;
}
