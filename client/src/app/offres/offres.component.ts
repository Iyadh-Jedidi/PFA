import { Component, OnInit } from '@angular/core';
import {ApiOffreService} from '../services/offre/api-offre.service';
import {AuthentificationService} from '../services/authentification.service';
import {ApiCompteService} from '../services/compte/api-compte.service';

@Component({
    selector: 'app-landing',
    templateUrl: './offres.component.html',
    styleUrls: ['./offres.component.scss']
})

export class OffresComponent implements OnInit {
  focus: any;
  focus1: any;
  compte: any = {};
  id = localStorage.getItem('id');
  offres: Array <any>
  constructor(private loginService: AuthentificationService,
              private compteApiService: ApiCompteService,
              private apiService: ApiOffreService) { }

  ngOnInit() {
      this.compteApiService.get(this.id).subscribe((offre: any) => {
          this.offres = offre;
      });

    this.apiService.getAll().subscribe(data => {
      this.offres = data;
    });
  }

}
