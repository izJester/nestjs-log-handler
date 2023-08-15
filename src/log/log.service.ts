import { Injectable } from '@nestjs/common';
import { Log } from './schemas/log.schema';
import { PgsqldriverService } from '../pgsqldriver/pgsqldriver.service';

@Injectable()
export class LogService {
  constructor(private readonly pgsqlDriverService: PgsqldriverService) {}

  async create(log: Log) {
    await this.pgsqlDriverService.create(log);
  }

}
