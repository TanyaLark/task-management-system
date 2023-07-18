import { Module } from '@nestjs/common';
import { AppController } from './controllers/app.controller';
import { AppService } from './app.service';
import { DataServicesModule } from './services/data-services/data-services.module';
import { TaskUseCasesModule } from './use-cases/task/task-use-cases.module';
import { UserUseCasesModule } from './use-cases/user/user-use-cases.module';
import { ProjectUseCasesModule } from './use-cases/project/project-use-cases.module';
import { TaskController } from './controllers/task.controller';
import { UserController } from './controllers/user.controller';
import { ProjectController } from './controllers/project.controller';

@Module({
  imports: [
    DataServicesModule,
    TaskUseCasesModule,
    UserUseCasesModule,
    ProjectUseCasesModule,
  ],
  controllers: [
    AppController,
    TaskController,
    UserController,
    ProjectController,
  ],
  providers: [AppService],
})
export class AppModule {}
