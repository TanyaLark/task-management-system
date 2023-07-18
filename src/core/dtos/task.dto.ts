import { IsEnum, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty, PartialType } from '@nestjs/swagger';
import { TaskStatus } from 'src/enums/task-status';

export class CreateTaskDto {
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  title: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  description: string;

  @IsEnum(TaskStatus)
  @ApiProperty()
  status: TaskStatus;

  @IsNotEmpty()
  @ApiProperty()
  projectId: any;

  @IsNotEmpty()
  @ApiProperty()
  assigneeId: any;

  @IsNotEmpty()
  @ApiProperty()
  reporterId: any;
}

export class UpdateTaskDto extends PartialType(CreateTaskDto) {}
