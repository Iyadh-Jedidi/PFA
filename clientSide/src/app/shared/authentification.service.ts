import { Injectable } from '@angular/core';
import {ApiCompteService} from './compte/apiCompte.service';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  comptes: Array <any>;
  constructor(private apiService: ApiCompteService , private router: Router) {
    this.apiService.getAll().subscribe(data => {
      this.comptes = data;
    });

  }

  authenticate(username, password) {
    if (username === 'admin' && password === 'admin') {
      sessionStorage.setItem('username', username)
      return -1;
    } else {
      for (let compte of this.comptes) {
        if (username === compte.name && password === compte.password)  {
          sessionStorage.setItem('username', username);
          return compte.id;
        }
      }
      return -2;

    }
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    console.log(!(user === null))
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}
