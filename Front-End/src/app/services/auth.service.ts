import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor() { }

  authUser(user: any) {
    let UserArray = [];
    if(localStorage.getItem('users')) {
      UserArray = JSON.parse(localStorage.getItem('users')!);
    }
    return UserArray.find((p: any) => p.userName === user.userName && p.password === user.password);
  }
}
