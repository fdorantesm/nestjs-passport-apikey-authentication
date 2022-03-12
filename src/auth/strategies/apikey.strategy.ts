import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { HeaderAPIKeyStrategy } from 'passport-headerapikey';
import { ApiKeyEntity } from '../entities/apikey.entity';
import { ApiKeysService } from '../services/apikeys.services';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy) {
  constructor(private readonly apiKeysService: ApiKeysService) {
    super(
      {
        header: 'Authorization',
        prefix: 'ApiKey ',
      },
      false,
    );
  }

  public validate(apiKey: string): ApiKeyEntity {
    const key = this.apiKeysService.findKey(apiKey);

    if (!key) {
      throw new UnauthorizedException();
    }

    return key;
  }
}
