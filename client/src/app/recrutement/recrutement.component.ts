import { Component, OnInit } from '@angular/core';
import {ApiCompteService} from '../services/compte/api-compte.service';


@Component({
  selector: 'app-recrutement',
  templateUrl: './recrutement.component.html',
  styleUrls: ['./recrutement.component.css']
})
export class RecrutementComponent implements OnInit {

  constructor(private apiService: ApiCompteService) { }
  comptes: Array <any>;

  ngOnInit() {
    this.apiService.getAll().subscribe(data => {
      this.comptes = data;
    });
  }

}
