import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DemandeFormationService {

  constructor(private http: HttpClient) { }

  postuler(idFormation:any,idFormation): Observable<any> {
    let result: Observable<Object>;
    if (foramtion.href) {
      result = this.http.put(foramtion.href, foramtion);
    } else {
      result = this.http.post(this.FORMATION_API, foramtion);
    }
    return result;
  }

}
