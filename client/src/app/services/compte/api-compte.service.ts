import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiCompteService {

   public API = '//localhost:8080';
  public COMTE_API = this.API + '/comptes';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/all-comptes');
  }
  get(id: string) {
    return this.http.get(this.COMTE_API + '/' + id);
  }

  save(compte: any): Observable<any> {
    let result: Observable<Object>;
    if (compte.href) {
      result = this.http.put(compte.href, compte);
    } else {
      result = this.http.post(this.COMTE_API, compte);
    }
    return result;
  }
  remove(href: string) {
    return this.http.delete(href);
  }
}
