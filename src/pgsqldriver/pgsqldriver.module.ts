import { Logger, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PgsqldriverService } from './pgsqldriver.service';
import { LogEntity } from '../log/entity/log.entity';

@Module({
  imports: [TypeOrmModule.forFeature([LogEntity])],
  providers: [PgsqldriverService],
  exports: [PgsqldriverService],
})
export class PgsqldriverModule {
  private readonly logger = new Logger(PgsqldriverModule.name);

  constructor() {
    this.logger.log('Pgsql driver has been imported.');
  }
}
