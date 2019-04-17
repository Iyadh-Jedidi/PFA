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
  constructor(private router: Router,private route: ActivatedRoute,
              private loginservice: AuthentificationService,
              private apiService: ApiCompteService) { }

  ngOnInit() {
    
  }
  gotoLogin() {
    this.router.navigate(['/login']);
  }
  save(form: NgForm) {
    this.apiService.save(form).subscribe(result => {
      this.gotoLogin();
    }, error => console.error(error));
  }
  checkLogin() {
    let n = this.loginservice.authenticate(this.username, this.password);
    if (n !== -2 ) {
      if (n === -1) {
        this.router.navigate(['/admin/comptes']);
      } else {
        this.router.navigate(['/admin/comptes', n]);
      }
    } else {
      this.invalidLogin = true;
    }
  }

}
