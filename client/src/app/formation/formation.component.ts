import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {ApiOffreService} from '../services/offre/api-offre.service';
import {ApiformationService} from '../services/formation/apiformation.service';

@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formation: Array <any> ;
  constructor(private apiService: ApiformationService) { }

  ngOnInit() {
    this.apiService.getAll().subscribe(data => {
      this.formation = data;
    });
  }


}
