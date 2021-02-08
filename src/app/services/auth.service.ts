import {Injectable} from '@angular/core';

import {IAuth} from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private authUsers: IAuth[];

  constructor() {
    this.authUsers = [{username: 'max', password: '1111'}, {username: 'kokos', password: '2222'}];
  }

  register(user: IAuth): void {
    this.authUsers.push(user);
  }

  login(user: IAuth): boolean {
    const res = this.authUsers.find(value => JSON.stringify(value) === JSON.stringify(user));
    return res ? !!res : false;
  }
}
