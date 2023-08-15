import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Log } from '../log/schemas/log.schema';

@Injectable()
export class MongodriverService {
  constructor(@InjectModel('Logs') private logModel: Model<Log>) {}

  async create(logData: Partial<Log>): Promise<Log> {
    const log = new this.logModel(logData);
    return log.save();
  }

  async findAll(): Promise<Log[]> {
    return this.logModel.find().exec();
  }
}
