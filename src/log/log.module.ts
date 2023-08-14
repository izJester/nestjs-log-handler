import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogSchema } from './schemas/log.schema';
// import { LogProvider } from './log.provider';
import { LogService } from './log.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Logs', schema: LogSchema }])],
  providers: [LogService],
  exports: [LogService],
})
export class LogModule {}
