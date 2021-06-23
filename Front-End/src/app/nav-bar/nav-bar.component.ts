import { Component, OnInit } from '@angular/core';
import { ToasterService } from '../services/toastr.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  loggedinUser!: string;
  constructor(private toastr: ToasterService) { }

  ngOnInit() {
  }

  loggedin() {
    this.loggedinUser = localStorage.getItem('token')!;
    return this.loggedinUser;
  }

  onLogout() {
    localStorage.removeItem('token');
    this.toastr.success("Successfully Logged out", "Done");
  }
}
