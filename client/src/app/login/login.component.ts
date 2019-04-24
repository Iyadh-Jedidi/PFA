import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {Router} from '@angular/router';
import {AuthentificationService} from '../services/authentification.service';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  focus;
  focus1;
  email = '' ;
  password = '';
  invalidLogin = false;
  compte: any = {typeCompteId: 'candidat'};
  sub: Subscription;
  constructor(private router: Router,
              private loginservice: AuthentificationService) { }

  ngOnInit() {
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }
  gotoSignup() {
    this.router.navigate(['/signup']);
  }
  checkLogin(form: NgForm) {
    this.loginservice.authenticate(form);
  }

}
