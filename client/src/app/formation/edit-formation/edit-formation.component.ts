import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ApiformationService} from '../../services/formation/apiformation.service';
import { ApiCompteService } from 'src/app/services/compte/api-compte.service';
import { DemandeFormationService } from '../../services/formation/demande-formation.service';

@Component({
  selector: 'app-edit-formation',
  templateUrl: './edit-formation.component.html',
  styleUrls: ['./edit-formation.component.css']
})
export class EditFormationComponent implements OnInit {
  formation: any = {};
  sub: Subscription;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiformationService,
              private apiCompte: ApiCompteService,
              private apiDemande: DemandeFormationService) { }

  
  compte: any = {};
  private idCompte=localStorage.getItem('id');
  private idFormation;


  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.apiService.get(id).subscribe((formation: any) => {
          if (formation) {
            this.formation = formation;
            this.formation.href = formation._links.self.href;
            this.idFormation=formation.id;
            console.log(this.formation.id);
          } else {
            console.log(`Formation with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
    this.apiCompte.get(this.idCompte).subscribe((compte: any) => {
      if (compte) {
        this.compte = compte;
      } else {
        console.log(`Compte with id '${this.idCompte}' not found, returning to list`);
        this.gotoList();
      }
    });
  }
  ngOngnDestroy() {
    this.sub.unsubscribe();
  }
  
  demadeFormation(idCompte,idFormation){
    this.apiCompte.addFormation(idCompte,idFormation).subscribe(data=>{
      this.formation=data;
      this.gotoList();
    });
    
    
  }

  gotoList() {
    this.router.navigate(['/responsable/formation']);
  }
  save(form: NgForm) {
    this.apiService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
  


  remove(href) {
    this.apiService.remove(href).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }


}
