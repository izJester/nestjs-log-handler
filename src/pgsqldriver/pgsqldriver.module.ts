import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LogEntity } from '../log/entity/log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LogEntity])],
})
export class PgsqldriverModule {}
