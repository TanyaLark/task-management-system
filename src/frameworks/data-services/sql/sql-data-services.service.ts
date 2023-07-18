import { Injectable, OnApplicationBootstrap } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import { IGenericRepository } from 'src/core/abstracts/generic-repository.abstract';
import { SqlGenericRepository } from './sql-generic-repository';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ProjectSchema } from './model/project.schema';
import { UserSchema } from './model/user.schema';
import { TaskSchema } from './model/task.schema';


@Injectable()
export class SqlDataServices implements IDataServices, OnApplicationBootstrap {
  projects: IGenericRepository<ProjectSchema>;
  tasks: IGenericRepository<TaskSchema>;
  users: IGenericRepository<UserSchema>;

  constructor(
    @InjectRepository(ProjectSchema)
    private readonly projectRepository: Repository<ProjectSchema>,

    @InjectRepository(TaskSchema)
    private readonly taskRepository: Repository<TaskSchema>,

    @InjectRepository(UserSchema)
    private readonly userRepository: Repository<UserSchema>,
  ) {}

  onApplicationBootstrap() {
    this.projects = new SqlGenericRepository<ProjectSchema>(this.projectRepository);
    this.tasks = new SqlGenericRepository<TaskSchema>(this.taskRepository);
    this.users = new SqlGenericRepository<UserSchema>(this.userRepository);
  }
}
