import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CreateTaskResponseDto } from 'src/core/dtos/create-task-response.dto';
import { CreateTaskDto, UpdateTaskDto } from 'src/core/dtos/task.dto';
import { Task } from 'src/core/entities/task.entity';
import { TaskFactoryService } from 'src/use-cases/task/task-factory.service';
import { TaskUseCases } from 'src/use-cases/task/task.use-case';

@Controller('api/task')
export class TaskController {
  constructor(
    private taskUseCases: TaskUseCases,
    private taskFactoryService: TaskFactoryService,
  ) {}

  @Get()
  async getAll(): Promise<Task[]> {
    return await this.taskUseCases.getAllTasks();
  }

  @Get(':id')
  async getById(@Param('id') id: any): Promise<Task> {
    return await this.taskUseCases.getTaskById(id);
  }

  @Post()
  async createTask(@Body() taskDto: CreateTaskDto): Promise<CreateTaskResponseDto> {
    const createTaskResponse = new CreateTaskResponseDto();
    try {
      const task = this.taskFactoryService.createNewTask(taskDto);
      const createdTask = await this.taskUseCases.createTask(task);

      createTaskResponse.success = true;
      createTaskResponse.createdTask = createdTask;
    } catch (error) {
       console.log("🚀 ~ file: task.controller.ts:35 ~ TaskController ~ createTask ~ error:", error)
       //todo report and log error
       createTaskResponse.success = false;
    }

    return createTaskResponse;
  }

  @Put(':id')
  async updateTask(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
  ): Promise<Task> {
    const task = this.taskFactoryService.updateTask(updateTaskDto);
    return await this.taskUseCases.updateTask(id, task);
  }

  @Delete(':id')
  async deleteTask(@Param('id') id: string) {
    return await this.taskUseCases.deleteTask(id);
  }
}
