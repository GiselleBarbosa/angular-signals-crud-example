import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, effect, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { TaskService } from './task/task.service';
import { UserService } from './user/user.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [
    TaskService,
    UserService,
    {
      provide: MatDialogRef,
      useValue: {},
    },
  ],
})
export class AppComponent {
  public taskService = inject(TaskService);

  constructor() {
    effect(() => {
      localStorage.setItem(
        'TASKS',
        JSON.stringify(this.taskService.userTasks()),
      );
    });
  }
}
