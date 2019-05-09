import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeOffreService {
  public API = '//localhost:8080';
  public OFFRE_API = this.API + '/demandeOffres';

  constructor(private http: HttpClient) { }

  postuler(idOffre:any,idCompte:any): Observable<any> {
    let result: Observable<Object>;
    
      result = this.http.post(this.OFFRE_API,idOffre,idCompte);
    
    return result;
  }

}
