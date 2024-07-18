import { Controller, Post, Body } from '@nestjs/common';
import { LogsService } from './logs.service';

@Controller('logs')
export class LogsController {
  constructor(private readonly logsService: LogsService) {}

  @Post()
  async uploadLogs(@Body() body: { logs: string }) {
    await this.logsService.processLogs(body.logs);
  }
}
