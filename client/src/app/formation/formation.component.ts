import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiformationService} from '../services/formation/apiformation.service';
import {AuthentificationService} from '../services/authentification.service';
import {ApiCompteService} from '../services/compte/api-compte.service';


@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  id = localStorage.getItem('id');
  compte: Array<any>;
  formation: Array <any> ;
  constructor(private loginService: AuthentificationService,
              private compteApiService: ApiCompteService,
              private apiService: ApiformationService) { }

  ngOnInit() {
    this.compteApiService.get(this.id).subscribe((compte: any) => {
      this.compte = compte;
    });
    this.apiService.getAll().subscribe(data => {
      this.formation = data;
    });
  }


}
