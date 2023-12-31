import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../user.service';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule],
  providers: [UserService],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent {
  public displayedColumns = ['id', 'name', 'email', 'gender'];

  public fullColumns = ['id', 'name', 'email', 'gender', 'action'];

  public userService = inject(UserService);

  public router = inject(Router);

  public users = this.userService.users;

  public totalUsersCount = this.userService.totalUsersCount;

  public setSelectedUserId(id: number): void {
    this.userService.setSelectedUserId(id);

    this.router.navigateByUrl(`tasks/${id}`);
  }
}
