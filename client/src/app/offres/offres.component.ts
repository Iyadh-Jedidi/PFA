import { Component, OnInit } from '@angular/core';
import {ApiOffreService} from '../services/offre/api-offre.service';
import {AuthentificationService} from '../services/authentification.service';

@Component({
    selector: 'app-landing',
    templateUrl: './offres.component.html',
    styleUrls: ['./offres.component.scss']
})

export class OffresComponent implements OnInit {
  focus: any;
  focus1: any;
  offres: Array <any>
  constructor(private loginService: AuthentificationService,private apiService: ApiOffreService) { }

  ngOnInit() {
    this.apiService.getAll().subscribe(data => {
      this.offres = data;
    });
  }

}
