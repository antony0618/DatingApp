import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { AlertifyService } from '../_services/alertify.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};

  constructor(private AuthServise: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }
  login() {

    this.AuthServise.login(this.model).subscribe(next => {

      this.alertify.success('Login Successful');

    }, error => {
    this.alertify.error(error);
    });
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout() {
   localStorage.removeItem('token');
  this.alertify.message('Logged out');
  }

}
