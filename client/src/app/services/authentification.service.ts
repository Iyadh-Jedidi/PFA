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
   /*setLocalStorageAndLeave(name, value, newLocation){
    value = value.toString(); // to prevent infinite loops
    localStorage.setItem(name, value);
    (function one(){
         if (localStorage.getItem(name) === value) {
            window.location = newLocation;
         } else {
            setTimeout(one, 50);
         }return this.http.get('//localhost:8080/all-comptes');
    })();
}*/


  authenticate(compte: any): Observable<any> {
    return this.http.get('//localhost:8080/email/' + compte.email + '/password/' + compte.password);
  }

  isUserLoggedIn() {
    const n = localStorage.length;
    return (n > 0);
  }

  logOut() {
    localStorage.removeItem('id');


  }
}
