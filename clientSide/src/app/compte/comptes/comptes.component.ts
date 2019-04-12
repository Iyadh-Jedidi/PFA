import { Component, OnInit } from '@angular/core';
import {ApiCompteService} from '../../shared/compte/apiCompte.service';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.css']
})
export class ComptesComponent implements OnInit {
  comptes: Array <any>
  constructor(private apiService: ApiCompteService) { }

  ngOnInit() {
    this.apiService.getAll().subscribe(data => {
      this.comptes = data;
    });
  }

}
