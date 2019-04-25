import { Component, OnInit } from '@angular/core';
import {ApiCompteService} from '../../services/compte/api-compte.service';

@Component({
  selector: 'app-comptes',
  templateUrl: './comptes.component.html',
  styleUrls: ['./comptes.component.scss']
})
export class ComptesComponent implements OnInit {
  comptes: Array <any>
  constructor(private apiService: ApiCompteService) { }
  typeComptes = [
    {id: 1 , name: 'responsable'},
    {id: 2 , name: 'candidat'},
    {id: 3 , name: 'employés'}]
  idTypeCompte = 1;

  ngOnInit() {
    this.apiService.getAll().subscribe(data => {
      this.comptes = data;
    });
    console.log(this.idTypeCompte);
  }
  changerToResponsbale() {
    this.idTypeCompte = 1;
  }
  changerToCandidat() {
    this.idTypeCompte = 2;
  }
  changerToEmploye() {
    this.idTypeCompte = 3;
  }




}
