import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import {ApiCompteService} from './compte/api-compte.service';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  comptes: Array <any>;
  constructor(private http: HttpClient, private apiService: ApiCompteService , private router: Router, private cookieService: CookieService  ) {
    /*this.apiService.getAll().subscribe(data => {
      this.comptes = data;
    });*/

  }
   /*setLocalStorageAndLeave(name, value, newLocation){
    value = value.toString(); // to prevent infinite loops
    localStorage.setItem(name, value);
    (function one(){
         if (localStorage.getItem(name) === value) {
            window.location = newLocation;
         } else {
            setTimeout(one, 50);
         }
    })();
}*/


  authenticate(compte: any): Observable<any> {

      console.log(compte.email);
      console.log(compte.password);
      return this.http.get( '//localhost:8080/email/' + compte.email + '/' + 'password/' + compte.password);

     /*if (username === 'admin' && password === 'admin') {
      localStorage.setItem('id', "1");

      this.router.navigate(['/admin/comptes']);
    } else {
      for (let compte of this.comptes) {
        if (username === compte.email && password === compte.password)  {
          const id = compte.id;
          this.setLocalStorageAndLeave('id', id, [ '/profile/' + id])
        }
      }
    }*/
  }

  isUserLoggedIn() {
    const n = localStorage.length;
    return (n > 0);
  }

  logOut() {
    localStorage.removeItem('id');


  }
}
