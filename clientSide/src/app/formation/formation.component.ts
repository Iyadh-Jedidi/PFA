import { Component, OnInit } from '@angular/core';
import {ApiOffreService} from '../shared/offre/apiOffre.service';
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.css']
})
export class FormationComponent implements OnInit {
  formation: Array <any> ;
  constructor(private apiService: ApiOffreService) { }

  ngOnInit() {
    this.apiService.getAll().subscribe(data => {
      this.formation = data;
    });
  }

}
