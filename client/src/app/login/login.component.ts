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
  compte: {id: '' }
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
  load(newLocation) {

        window.location = newLocation;

    }
  checkLogin(form: NgForm) {
    this.loginservice.authenticate(form)
        .subscribe(data => {
          this.compte = data ;
          if (this.compte == null){
              alert('Email ou Password sont incorrectes')
              this.load('/login') ;
          } else {
            localStorage.setItem('id', this.compte.id) ;
            this.load(['/profile/' + this.compte.id]);
          }
           });


  }

}
