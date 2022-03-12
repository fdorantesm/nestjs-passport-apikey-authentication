import { Injectable } from '@nestjs/common';
import { ApiKeyEntity } from '../entities/apikey.entity';

@Injectable()
export class ApiKeysRepository {
  private keys: ApiKeyEntity[] = [
    {
      name: 'Test Client Key',
      key: '37a59818-ee25-4f8a-bf5f-75830489890a',
    },
  ];

  public findOne(key: string): ApiKeyEntity {
    return this.keys.find((apiKey) => key === apiKey.key);
  }
}
