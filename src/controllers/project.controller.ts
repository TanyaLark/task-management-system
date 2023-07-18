import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProjectDto, UpdateProjectDto } from 'src/core/dtos/project.dto';
import { Project } from 'src/core/entities/project.entity';
import { ProjectUseCases } from 'src/use-cases/project/project.use-case';

@Controller('api/project')
export class ProjectController {
  constructor(private projectUseCases: ProjectUseCases) {}

  @Get()
  async getAll(): Promise<Project[]> {
    return await this.projectUseCases.getAllProjects();
  }

  @Get(':id')
  async getById(@Param('id') id: any): Promise<Project> {
    return await this.projectUseCases.getProjectById(id);
  }

  @Post()
  async createProject(@Body() projectDto: CreateProjectDto): Promise<Project> {
    return await this.projectUseCases.createProject(projectDto);
  }

  @Put(':id')
  async updateProject(
    @Param('id') id: string,
    @Body() projectDto: UpdateProjectDto,
  ): Promise<Project> {
    return await this.projectUseCases.updateProject(id, projectDto);
  }

  @Delete(':id')
  async deleteProject(@Param('id') id: string) {
    return await this.projectUseCases.deleteProject(id);
  }
}
