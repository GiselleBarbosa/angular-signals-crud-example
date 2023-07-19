import { Task } from 'src/app/task/task.model';

export interface User {
  id: number;
  name: string;
  email: string;
  gender: 'M' | 'F';
  tasks: Task[];
}
