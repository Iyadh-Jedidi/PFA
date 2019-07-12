import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {ApiCompteService} from './compte/api-compte.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/operator/map';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  comptes: Array <any>;
  constructor(private http: HttpClient, private apiService: ApiCompteService , private router: Router, private cookieService: CookieService  ) {
    

  }

  ReverseStr(str) {
    return str.split('').reverse().join('');
  }  
  authenticate(compte: any): Observable<any> {
     const ch =this.ReverseStr(compte.password);

    return this.http.get('//localhost:8080/email/' + compte.email + '/password/' + ch);
  }

  isUserLoggedIn() {
    const n = localStorage.length;
    return (n > 0);
  }

  logOut() {
    localStorage.removeItem('id');


  }
}
