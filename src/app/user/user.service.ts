import { HttpClient } from '@angular/common/http';
import { Injectable, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { User } from './user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  public http = inject(HttpClient);

  public userUrl = 'http://localhost:3000/users';

  private users$ = this.http.get<User[]>(this.userUrl);

  public users = toSignal(this.users$, { initialValue: [] as User[] });

  public totalUsersCount = computed(() => this.users().length)
}
