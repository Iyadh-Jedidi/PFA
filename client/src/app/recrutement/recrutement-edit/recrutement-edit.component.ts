import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiCompteService} from '../../services/compte/api-compte.service';

import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-recrutement-edit',
  templateUrl: './recrutement-edit.component.html',
  styleUrls: ['./recrutement-edit.component.css']
})
export class RecrutementEditComponent implements OnInit {

  compte: any = {accepte:1};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiCompteService) {
  }
  

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        console.log(id);
        this.apiService.get(id).subscribe((compte: any) => {
          if (compte) {
            this.compte = compte;
            this.compte.href = compte._links.self.href;
            this.compte.accepte = 1;
          } else {
            console.log(`Compte with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }

  ngOngnDestroy() {
    this.sub.unsubscribe();
  }

  gotoList() {
    this.router.navigate(['/responsable/recrutement']);
  }

/*  save(form: NgForm) {
    this.apiService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }*/
  save(form: NgForm) {
    this.apiService.save(form).subscribe(result => {
      alert("Vous avez ajouter une nouveau "+this.compte.typeCompteId)
      this.gotoList();
    }, error => console.error(error));
  }

  
}
