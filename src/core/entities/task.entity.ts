import { TaskStatus } from "src/enums/task-status";
import { Project } from "./project.entity";
import { User } from "./user.entity";

export class Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  project: Project;
  assignee: User;
  reporter: User;
}
