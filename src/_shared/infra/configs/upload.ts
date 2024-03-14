import crypto from 'crypto';
import multer, { StorageEngine } from 'multer';
import { resolve } from 'path';

export class UploadManager {
  private folder: string;

  constructor(folder: string) {
    this.folder = folder;
  }

  private generateFileName(file: any): string {
    const fileHash = crypto.randomBytes(16).toString('hex');
    return `${fileHash}-${file.originalname}`;
  }

  public upload(): { storage: StorageEngine } {
    return {
      storage: multer.diskStorage({
        destination: resolve(__dirname, '..', '..', this.folder),
        filename: (request, file, callback) => {
          const fileName = this.generateFileName(file);
          return callback(null, fileName);
        },
      }),
    };
  }
}