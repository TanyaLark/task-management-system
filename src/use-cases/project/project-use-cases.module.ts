import { Module } from '@nestjs/common';
import { ProjectFactoryService } from './project-factory.service';
import { ProjectUseCases } from './project.use-case';
import { DataServicesModule } from 'src/services/data-services/data-services.module';

@Module({
  imports: [DataServicesModule],
  providers: [ProjectFactoryService, ProjectUseCases],
  exports: [ProjectFactoryService, ProjectUseCases],
})
export class ProjectUseCasesModule {}
