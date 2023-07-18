import { Project } from '../entities/project.entity';
import { Task } from '../entities/task.entity';
import { User } from '../entities/user.entity';
import { IGenericRepository } from './generic-repository.abstract';

export abstract class IDataServices {
  abstract projects: IGenericRepository<Project>;

  abstract tasks: IGenericRepository<Task>;

  abstract users: IGenericRepository<User>;
}
