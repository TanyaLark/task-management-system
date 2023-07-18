import { Injectable, OnApplicationBootstrap } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IDataServices } from "src/core/abstracts/data-services.abstract";
import { IGenericRepository } from "src/core/abstracts/generic-repository.abstract";
import { Project } from "src/core/entities/project.entity";
import { Task } from "src/core/entities/task.entity";
import { User } from "src/core/entities/user.entity";
import { MongoGenericRepository } from "./mongo-generic-repository";

@Injectable()
export class MongoDataServices implements IDataServices, OnApplicationBootstrap
{
  projects: IGenericRepository<Project>;
  tasks: IGenericRepository<Task>;
  users: IGenericRepository<User>;

  constructor(
    @InjectModel (Project.name) 
    private ProjectRepository: Model<Project>,
    @InjectModel (Task.name) 
    private TaskRepository: Model<Task>,
    @InjectModel (User.name)
    private UserRepository: Model<User> 
  ){}
  
  onApplicationBootstrap() {
    this.users = new MongoGenericRepository<User>(this.UserRepository);
    this.projects = new MongoGenericRepository<Project>(this.ProjectRepository);
    this.tasks = new MongoGenericRepository<Task>(this.TaskRepository, ['project', 'assignee', 'reporter']);
  }
}
