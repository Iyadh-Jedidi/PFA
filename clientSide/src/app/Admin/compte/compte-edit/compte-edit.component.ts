import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiCompteService} from '../../../shared/compte/apiCompte.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-compte-edit',
  templateUrl: './compte-edit.component.html',
  styleUrls: ['./compte-edit.component.css']
})
export class CompteEditComponent implements OnInit {

  compte: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiCompteService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.apiService.get(id).subscribe((compte: any) => {
          if (compte) {
            this.compte = compte;
            this.compte.href = compte._links.self.href;
          } else {
            console.log(`Car with id '${id}' not found, returning to list`);
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
    this.router.navigate(['/all-comptes']);
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
