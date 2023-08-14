import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from './schemas/log.schema';

@Injectable()
export class LogService {
  constructor(@InjectModel('Logs') private logModel: Model<Log>) {}

  async create(logData: Partial<Log>): Promise<Log> {
    const log = new this.logModel(logData);
    return log.save();
  }
}
