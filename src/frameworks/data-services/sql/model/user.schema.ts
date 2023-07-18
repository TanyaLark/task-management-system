import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { TaskSchema } from './task.schema';

@Entity()
export class UserSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @OneToOne( () => TaskSchema, task => task.assignee)
  assignedTask: TaskSchema;

  @OneToOne( () => TaskSchema, task => task.reporter)
  reportedTask: TaskSchema;
}
