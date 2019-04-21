import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../shared/authentification.service';
import { CookieService } from 'ngx-cookie-service';
import { ApiCompteService } from 'src/app/shared/compte/apiCompte.service';

@Component({
  selector: 'app-profilenavigation',
  templateUrl: './profilenavigation.component.html',
  styleUrls: ['./profilenavigation.component.css']
})
export class ProfilenavigationComponent implements OnInit {
  compte: any = {};
  constructor(private apiCompte: ApiCompteService,private loginService: AuthentificationService,private cookieService: CookieService) { }
  id = this.cookieService.get('id');

  ngOnInit() {
    this.apiCompte.get(this.id).subscribe((compte: any) => {
        this.compte = compte;
    });
  }
  typeCompte=this.compte.typeCompteId
  

}
