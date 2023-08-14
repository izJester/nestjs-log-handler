import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogSchema } from './schemas/log.schema';
import { LogService } from './log.service';
import { MongodriverModule } from '../mongodriver/mongodriver.module';
import { PgsqldriverModule } from '../pgsqldriver/pgsqldriver.module';

@Module({
  imports: [],
  providers: [LogService],
  exports: [LogService],
})
export class LogModule {
  static start(connectionType): DynamicModule {
    let module: DynamicModule;

    if (connectionType === 'mongo') {
      module = {
        module: MongodriverModule,
      };
    } else if (connectionType === 'pgsql') {
      module = {
        module: PgsqldriverModule,
      };
    }

    return {
      module: LogModule,
      imports: [module],
    };
  }
}
