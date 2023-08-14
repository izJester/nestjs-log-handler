import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogSchema } from '../log/schemas/log.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Logs', schema: LogSchema }])],
})
export class MongodriverModule {}
