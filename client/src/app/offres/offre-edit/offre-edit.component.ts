import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ApiOffreService} from '../../services/offre/api-offre.service';
import { DatePipe } from '@angular/common';
import { ApiCompteService } from 'src/app/services/compte/api-compte.service';

@Component({
  selector: 'app-offre-edit',
  templateUrl: './offre-edit.component.html',
  styleUrls: ['./offre-edit.component.css']
})
export class OffreEditComponent implements OnInit {

  offre: any = {};

  sub: Subscription;
  private idCompte=localStorage.getItem('id');
  private idOffre;
  compte: any = {};


  constructor(private datePipe: DatePipe,
              private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiOffreService,
              private apiCompte: ApiCompteService) {
  }
  transformDate(date) {
    let dateFormat = String(date);
    let test = dateFormat.substring(0,10);
    return test;

  }
  private DateCreation=''
  ngOnInit() {
    this.apiCompte.get(this.idCompte).subscribe((compte: any) => {
      if (compte) {
        this.compte = compte;
      } else {
        console.log(`Compte with id '${this.idCompte}' not found, returning to list`);
        this.gotoList();
      }
    });
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      this.idOffre=id;
      if (id) {
        this.apiService.get(id).subscribe((offre: any) => {
          if (offre) {
            this.offre = offre;
            this.offre.href = offre._links.self.href;
            this.DateCreation= this.transformDate(this.offre.creationDate)
            console.log(this.DateCreation)    
          } else {
            console.log(`Offre with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
      
    });
  }
  

  ngOngnDestroy() {
    this.sub.unsubscribe();
  }
  demandeOffre(idCompte,idOffre){
    this.apiCompte.addOffre(idCompte,idOffre).subscribe(data=>{
      if (data !=null){
        this.offre=data;
      alert("Merci pour postuler à cet offre ");
      
      }else{
        alert("vous êtes déja inscrit a cet offre")
      }
      this.gotoList();
    });
    
    
  }

  gotoList() {
    this.router.navigate(['/offres']);
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
