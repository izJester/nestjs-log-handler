import { DynamicModule, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LogSchema } from './schemas/log.schema';
import { LogService } from './log.service';
import { MongodriverModule } from '../mongodriver/mongodriver.module';
import { PgsqldriverModule } from '../pgsqldriver/pgsqldriver.module';

@Module({})
export class LogModule {
  static forRoot(dbType: 'mongo' | 'pgsql'): DynamicModule {
    let driverModule;

    if (dbType === 'mongo') {
      driverModule = MongodriverModule;
    } else if (dbType === 'pgsql') {
      driverModule = PgsqldriverModule;
    } else {
      throw new Error(`Unsupported dbType: ${dbType}`);
    }

    return {
      module: LogModule,
      imports: [driverModule],
      providers: [LogService],
      exports: [LogService],
    };
  }
}
