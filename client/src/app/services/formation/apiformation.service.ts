import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiformationService {

  public API = '//localhost:8080';
  public FORMATION_API = this.API + '/formations';
  constructor(private http: HttpClient) {
  }
  getAll(): Observable<any> {
    return this.http.get('//localhost:8080/all-formations');
  }
  get(id: string) {
    return this.http.get(this.FORMATION_API + '/' + id);
  }

  save(formation: any): Observable<any> {
      return this.http.post(this.API + '/post-formation', formation);

  }
  update(formation: any, id): Observable<any> {
      return this.http.put(this.API + '/formations/' + id, formation);

  }
  remove(href: string) {
    return this.http.delete(href);
  }

}
