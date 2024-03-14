import {
  S3Client,
  PutObjectCommand,
  GetObjectCommand,
} from '@aws-sdk/client-s3';
import { Readable } from 'nodemailer/lib/xoauth2';
import { IStorage } from '~/_shared/application/storage.interface';

export class AWSS3Storage implements IStorage {
  constructor(private client: S3Client, private bucketName: string) {}

  async store(object: {
    data: Buffer;
    mimeType?: string | undefined;
    id: string;
  }): Promise<void> {
    const command = new PutObjectCommand({
      Bucket: this.bucketName,
      Key: object.id,
      Body: object.data,
      ContentType: object.mimeType,
    });

    try {
      await this.client.send(command);
    } catch (error) {
      console.error('Error storing object in AWS S3:', error);
      throw error;
    }
  }

  async get(
    id: string
  ): Promise<{ data: Buffer; mimeType: string | undefined }> {
    const command = new GetObjectCommand({
      Bucket: this.bucketName,
      Key: id,
    });

    try {
      const response = await this.client.send(command);
      const bodyStream = response.Body as Readable;
      const chunks: Uint8Array[] = [];

      for await (const chunk of bodyStream) {
        chunks.push(chunk);
      }

      const data = Buffer.concat(chunks);
      const contentType = response.ContentType;
      return {
        data: data,
        mimeType: contentType,
      };
    } catch (error) {
      console.error('Error getting object from AWS S3:', error);
      throw error;
    }
  }
}
