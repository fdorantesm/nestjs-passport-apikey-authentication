import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiKeyGuard } from 'src/auth/guards/apikey.guard';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(ApiKeyGuard)
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
