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

  constructor(public authServise: AuthService, private alertify: AlertifyService) { }

  ngOnInit() {
  }
  login() {

    this.authServise.login(this.model).subscribe(next => {

      this.alertify.success('Login Successful');

    }, error => {
      this.alertify.error(error);
    });
  }

  loggedIn() {
    // const token = localStorage.getItem('token');
    // return !!token;
    return this.authServise.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    this.alertify.message('Logged out');
  }

}
