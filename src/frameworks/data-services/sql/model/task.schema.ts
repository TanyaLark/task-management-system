import { TaskStatus } from "src/enums/task-status";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProjectSchema } from "./project.schema";
import { UserSchema } from "./user.schema";

@Entity()
export class TaskSchema {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @ManyToOne(() => ProjectSchema, (project) => project.tasks)
  project: ProjectSchema;

  @OneToOne( () => UserSchema, user => user.assignedTask)
  @JoinColumn()
  assignee: UserSchema;

  @OneToOne( () => UserSchema, user => user.reportedTask)
  @JoinColumn()
  reporter: UserSchema;
}
