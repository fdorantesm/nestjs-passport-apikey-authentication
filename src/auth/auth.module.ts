import { Module } from '@nestjs/common';
import { ApiKeyGuard } from './guards/apikey.guard';
import { ApiKeysRepository } from './repositories/apikeys.repository';
import { ApiKeysService } from './services/apikeys.services';
import { ApiKeyStrategy } from './strategies/apikey.strategy';

@Module({
  providers: [ApiKeysService, ApiKeysRepository, ApiKeyGuard, ApiKeyStrategy],
})
export class AuthModule {}
