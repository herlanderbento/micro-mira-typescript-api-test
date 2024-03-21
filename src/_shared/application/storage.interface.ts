export interface IStorage {
  store(object: { data: Buffer; mimeType?: string; id: string }): Promise<void>;

  get(id: string): Promise<{ data: Buffer; mimeType: string | undefined }>;
}

export interface StorageParams {
  fileName: string;
  fileType: string;
  body: Buffer;
}

export interface Storage {
  store(object: {
    fileName: string;
    fileType: string;
    body: Buffer;
   }): Promise<{ url: string }>;
}
