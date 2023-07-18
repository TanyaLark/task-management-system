import { Injectable } from '@nestjs/common';
import { CreateProjectDto, UpdateProjectDto } from 'src/core/dtos/project.dto';
import { Project } from 'src/core/entities/project.entity';

@Injectable()
export class ProjectFactoryService {
  createNewProject(createProjectDto: CreateProjectDto): Project {
    const newProject = new Project();
    newProject.name = createProjectDto.name;
    newProject.description = createProjectDto.description;

    return newProject;
  }

  updateProject(updateProjectDto: UpdateProjectDto): Project {
    const updatedProject = new Project();
    updatedProject.name = updateProjectDto.name;
    updatedProject.description = updateProjectDto.description;

    return updatedProject;
  }
}
