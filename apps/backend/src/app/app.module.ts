import { Module } from '@nestjs/common';
import { LogsController } from '../logs/logs.controller';
import { LogsService } from '../logs/logs.service';

import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
  imports: [],
  controllers: [AppController, LogsController],
  providers: [AppService,LogsService],
})
export class AppModule {}
