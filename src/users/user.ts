import { Task } from 'src/task/task';

export interface User {
  id: number;
  name: string;
  email: string;
  gender: 'M' | 'F';
  tasks: Task[];
}
