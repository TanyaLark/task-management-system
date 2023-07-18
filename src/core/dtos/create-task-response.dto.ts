import { Task } from '../entities/task.entity';

export class CreateTaskResponseDto {
  success: boolean;

  createdTask: Task;
}
