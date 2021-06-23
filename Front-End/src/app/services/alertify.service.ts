import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

constructor() { }
  success(message: string, title?: string){
    alertify.success(message, title);
  }

  error(message: string, title?: string){
    alertify.error(message, title);
  }
}
