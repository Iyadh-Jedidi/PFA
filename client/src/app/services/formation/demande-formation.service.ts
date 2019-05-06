import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DemandeFormationService {
  public API = '//localhost:8080';
  public FORMATION_API = this.API + '/demandeFormations';

  constructor(private http: HttpClient) { }

  postuler(idFormation:any,idCompte:any): Observable<any> {
    let result: Observable<Object>;
    
      result = this.http.post(this.FORMATION_API,idFormation,idCompte);
    
    return result;
  }

}
