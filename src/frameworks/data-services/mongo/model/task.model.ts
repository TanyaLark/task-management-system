import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { TaskStatus } from 'src/enums/task-status';
import { Project } from './project.model';
import * as mongoose from 'mongoose';
import { User } from './user.model';

// export type TaskDocument = Task & Document;

@Schema()
export class Task {
  @Prop({ required: true, unique: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  status: TaskStatus;

  @Prop({
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Project',
    required: true,
  })
  project: Project;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  assignee: User;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true })
  reporter: User;
}

export const TaskSchema = SchemaFactory.createForClass(Task);
