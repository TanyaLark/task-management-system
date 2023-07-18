import { Injectable } from '@nestjs/common';
import { CreateTaskDto, UpdateTaskDto } from 'src/core/dtos/task.dto';
import { Task } from 'src/core/entities/task.entity';

@Injectable()
export class TaskFactoryService {
  createNewTask(createTaskDto: CreateTaskDto) {
    const newTask = new Task();
    newTask.title = createTaskDto.title;
    newTask.description = createTaskDto.description;
    newTask.status = createTaskDto.status;
    newTask.project = createTaskDto.projectId;
    newTask.assignee = createTaskDto.assigneeId;
    newTask.reporter = createTaskDto.reporterId;

    return newTask;
  }

  updateTask(updateTaskDto: UpdateTaskDto) {
    const updatedTask = new Task();
    updatedTask.title = updateTaskDto.title;
    updateTaskDto.description = updateTaskDto.description;
    updatedTask.status = updateTaskDto.status;

    return updatedTask;
  }
}
