import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import { SqlDataServices } from './sql-data-services.service';
import { SQL_DATA_BASE_CONFIGURATION } from 'src/configuration';
import { UserSchema } from './model/user.schema';
import { TaskSchema } from './model/task.schema';
import { ProjectSchema } from './model/project.schema';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProjectSchema, UserSchema, TaskSchema]),
    TypeOrmModule.forRoot(SQL_DATA_BASE_CONFIGURATION),
  ],
  providers: [ { provide: IDataServices,  useClass: SqlDataServices }],
  exports: [IDataServices],
})
export class SqlDataServicesModule {}
