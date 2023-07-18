import { Injectable } from '@nestjs/common';
import { IDataServices } from 'src/core/abstracts/data-services.abstract';
import { Task } from 'src/core/entities/task.entity';

@Injectable()
export class TaskUseCases {
  constructor(
    private dataServices: IDataServices,
  ) {}

  getAllTasks(): Promise<Task[]> {
    return this.dataServices.tasks.getAll();
  }

  getTaskById(id: any): Promise<Task> {
    return this.dataServices.tasks.get(id);
  }

  async createTask(task: Task): Promise<Task> {
   try {
    const createdTask = await this.dataServices.tasks.create(task);
  
    return createdTask;
   } catch (error) {
    throw error;
   }
  }

  updateTask(taskId: string, task: Task): Promise<Task> {
    return this.dataServices.tasks.update(taskId, task);
  }

  deleteTask(taskId: string) {
    return this.dataServices.tasks.delete(taskId);
  }
}
