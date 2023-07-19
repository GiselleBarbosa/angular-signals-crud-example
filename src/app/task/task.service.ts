import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { switchMap, tap } from 'rxjs';
import { Task } from 'src/task/task';
import { UserService } from '../user/user.service';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  public http = inject(HttpClient);

  public userService = inject(UserService);

  public usersUrl = 'http://localhost:3000/users';

  public tasksUrl = 'http://localhost:3000/tasks';

  public userTasks = signal<Task[]>([]);

  private userTasks$ = toObservable(this.userService.selectedUserId).pipe(
    switchMap((userId) =>
      this.http.get<Task[]>(`${this.tasksUrl}?userId=${userId}`).pipe(
        tap((tasks) => {
          this.userTasks.set(tasks);
        }),
      ),
    ),
  );
  public readOnlyUserTasks = toSignal(this.userTasks$, {
    initialValue: [] as Task[],
  });
}
