import { Injectable } from '@nestjs/common';
import { LogsService } from './logs.service';

@Injectable()
export class TaskManagerService {
  constructor(private readonly logsService: LogsService) {}

  async processLogs() {
    for (;;) {
      const log = await this.logsService.getLogFromQueue();
      if (log) {
        await this.logsService.saveLogToClickHouse(log);
      }
      await new Promise((resolve) => setTimeout(resolve, 1000));
    }
  }
}
