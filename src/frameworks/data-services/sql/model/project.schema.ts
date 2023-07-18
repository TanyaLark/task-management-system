import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { TaskSchema } from './task.schema';

@Entity()
export class ProjectSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  description: string;

  @OneToMany(() => TaskSchema, (task) => task.project)
  tasks: TaskSchema[];
}
