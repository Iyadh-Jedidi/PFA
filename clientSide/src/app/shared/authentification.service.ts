import { Injectable } from '@angular/core';
import {ApiCompteService} from './compte/apiCompte.service';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';



@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  comptes: Array <any>;
  constructor(private apiService: ApiCompteService , private router: Router, private cookieService: CookieService  ) {
    this.apiService.getAll().subscribe(data => {
      this.comptes = data;
    });

  }

  authenticate(username, password) {
    if (username === 'admin' && password === 'admin') {
      //sessionStorage.setItem('username', username);
      this.cookieService.set('id', username);
      this.router.navigate(['/admin/comptes']);
    } else {
      for (let compte of this.comptes) {
        if (username === compte.email && password === compte.password)  {
          //sessionStorage.setItem('username', username);
          const id = compte.id;
          this.cookieService.set('id', compte.id);
          this.router.navigate(['/profile', compte.id]);
        }
      }
    }
  }

  isUserLoggedIn() {
    const cookieExists = this.cookieService.check('id');
    return (cookieExists === true);
  }

  logOut() {
    //sessionStorage.removeItem('username');
    this.cookieService.delete('id');

  }
}
