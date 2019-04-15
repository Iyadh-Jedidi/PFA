import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthentificationService } from '../shared/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  comptes: Array <any>;
  constructor(private router: Router,
              private loginservice: AuthentificationService) { }

  ngOnInit() {
  }
  checkLogin() {
    let n = this.loginservice.authenticate(this.username, this.password);
    if (n !== -2 ) {
      if (n === -1) {
        this.router.navigate(['/admin/comptes']);
      } else {
        this.router.navigate(['/compte-edit', n]);
      }
    } else {
      this.invalidLogin = true;
    }
  }

}
