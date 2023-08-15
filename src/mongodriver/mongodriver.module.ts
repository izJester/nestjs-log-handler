import { Logger, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogSchema } from '../log/schemas/log.schema';
import { MongodriverService } from './mongodriver.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Logs', schema: LogSchema }])],
  providers: [MongodriverService],
  exports: [MongodriverService],
})
export class MongodriverModule {
  private readonly logger = new Logger(MongodriverModule.name);

  constructor() {
    this.logger.log('Mongo driver has been imported.');
  }
}
