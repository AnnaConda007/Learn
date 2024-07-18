import { Injectable } from '@nestjs/common';
import { Kafka } from 'kafkajs';
import { createClient } from 'redis';
import { ClickHouse } from 'clickhouse';

@Injectable()
export class LogsService {
  private kafka = new Kafka({
    clientId: 'log-analyzer',
    brokers: ['localhost:9092'],
  });

  private redisClient = createClient({ url: 'redis://localhost:6379' });

  private clickHouseClient = new ClickHouse({
    url: 'http://localhost:8123',
    basicAuth: {
      username: 'default',
      password: '',
    },
    debug: false,
  });

  constructor() {
    this.redisClient.connect();
  }

  async processLogs(logs: string) {
    const producer = this.kafka.producer();
    await producer.connect();
    await producer.send({
      topic: 'logs',
      messages: [{ value: logs }],
    });
    await producer.disconnect();

    await this.redisClient.lPush('log-queue', logs);
  }

  async saveLogToClickHouse(log: string) {
    await this.clickHouseClient.insert('INSERT INTO logs (log) VALUES', { log });
  }

  async getLogFromQueue(): Promise<string> {
    return this.redisClient.rPop('log-queue');
  }
}
