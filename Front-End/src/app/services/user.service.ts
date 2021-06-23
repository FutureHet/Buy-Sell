import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor() { }

  addUser(new_user: User) {
    // let users: { userName: string, email: string, password: string, confirmPassword: string, mobile: number }[] = JSON.parse(localStorage.getItem('users')!) || [];
    let users: any[] = JSON.parse(localStorage.getItem('users')!) || [];
    users.push(new_user);
    localStorage.setItem('users', JSON.stringify(users));
  }

}
