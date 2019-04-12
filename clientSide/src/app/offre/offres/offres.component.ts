import { Component, OnInit } from '@angular/core';
import {ApiCompteService} from '../../shared/compte/apiCompte.service';
import {ApiOffreService} from '../../shared/offre/apiOffre.service';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  offres: Array <any>
  constructor(private apiService: ApiOffreService) { }

  ngOnInit() {
    this.apiService.getAll().subscribe(data => {
      this.offres = data;
    });
  }


}
