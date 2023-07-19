import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { UserService } from 'src/app/user/user.service';
import { TaskService } from '../../task.service';

@Component({
  selector: 'app-task-details',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.scss'],
  providers: [TaskService],
})
export class TaskDetailsComponent {
  public selecterUserId!: number;

  public userService = inject(UserService);

  public route = inject(ActivatedRoute);

  public router = inject(Router);

  public ngOnInit(): void {
    this.selecterUserId = +this.route.snapshot.paramMap.get('id')!;

    if (this.selecterUserId) {
      this.userService.setSelectedUserId(this.selecterUserId);
    } else {
      this.router.navigateByUrl('/');
    }
  }
}
