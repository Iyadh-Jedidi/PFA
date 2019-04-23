import { Component, OnInit } from '@angular/core';
import {ApiOffreService} from '../shared/offre/apiOffre.service';
import {ApiformationService} from '../shared/formation/apiformation.service';
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
