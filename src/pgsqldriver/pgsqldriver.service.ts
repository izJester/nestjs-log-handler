import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { LogEntity } from '../log/entity/log.entity';
import { Log } from '../interfaces/content.interface';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class PgsqldriverService {
    constructor(
        @InjectRepository(LogEntity)
        private logModel: Repository<LogEntity>,
      ) {}
    
      async create(log: Log): Promise<void> {
        const data = this.logModel.create(log);
        await this.logModel.save(data);
      }
    
      findAll(): Promise<LogEntity[]> {
        return this.logModel.find();
      }
}
