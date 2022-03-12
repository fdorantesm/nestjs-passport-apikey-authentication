import { Injectable } from '@nestjs/common';
import { ApiKeyEntity } from '../entities/apikey.entity';
import { ApiKeysRepository } from '../repositories/apikeys.repository';

@Injectable()
export class ApiKeysService {
  constructor(private apiKeysRepository: ApiKeysRepository) {}

  public findKey(key: string): ApiKeyEntity {
    return this.apiKeysRepository.findOne(key);
  }
}
