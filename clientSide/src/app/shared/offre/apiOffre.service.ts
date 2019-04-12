import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiOffreService {

   public API = '//localhost:8080';
  public OFFRE_API = this.API + '/offres';
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/all-offres');
  }
  get(id: string) {
    return this.http.get(this.OFFRE_API + '/' + id);
  }

  save(offre: any): Observable<any> {
    let result: Observable<Object>;
    if (offre.href) {
      result = this.http.put(offre.href, offre);
    } else {
      result = this.http.post(this.OFFRE_API, offre);
    }
    return result;
  }
  remove(href: string) {
    return this.http.delete(href);
  }
}
