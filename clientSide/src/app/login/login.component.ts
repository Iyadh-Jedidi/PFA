import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthentificationService } from '../shared/authentification.service';
import { ApiCompteService } from '../shared/compte/apiCompte.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false
  compte: any = {typeCompteId:'candidat'};
  sub: Subscription;
  constructor(private router: Router,
              private loginservice: AuthentificationService,
              private apiService: ApiCompteService) { }

  ngOnInit() {
  }

  gotoHome() {
    this.router.navigate(['/home']);
  }
  gotoSignup(){
    this.router.navigate(['/signup']);
  }
  save(form: NgForm) {
    this.apiService.save(form).subscribe(result => {
      this.gotoHome();
    }, error => console.error(error));
  }
  checkLogin() {
    this.loginservice.authenticate(this.username, this.password);
  }

}

