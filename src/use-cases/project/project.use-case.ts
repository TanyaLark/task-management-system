import { Injectable } from '@nestjs/common';
import { ProjectFactoryService } from './project-factory.service';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import { Project } from 'src/core/entities/project.entity';
import { CreateProjectDto, UpdateProjectDto } from 'src/core/dtos/project.dto';

@Injectable()
export class ProjectUseCases {
  constructor(
    private readonly dataServices: IDataServices,
    private readonly projectFactoryService: ProjectFactoryService,
  ) {}

  getAllProjects(): Promise<Project[]> {
    return this.dataServices.projects.getAll();
  }

  getProjectById(id: any): Promise<Project> {
    return this.dataServices.projects.get(id);
  }

  createProject(createProjectDto: CreateProjectDto): Promise<Project> {
    const createdProject =
      this.projectFactoryService.createNewProject(createProjectDto);
    return this.dataServices.projects.create(createdProject);
  }

  updateProject(
    projectId: string,
    updateProjectDto: UpdateProjectDto,
  ): Promise<Project> {
    const updatedProject =
      this.projectFactoryService.updateProject(updateProjectDto);
    return this.dataServices.projects.update(projectId, updatedProject);
  }

  deleteProject(projectId: string): Promise<Project> {
    return this.dataServices.projects.delete(projectId);
  }
}
