import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiOffreService} from '../../../shared/offre/apiOffre.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-offre-edit',
  templateUrl: './offre-edit.component.html',
  styleUrls: ['./offre-edit.component.css']
})
export class OffreEditComponent implements OnInit {

  offre: any = {};

  sub: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiOffreService) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.apiService.get(id).subscribe((offre: any) => {
          if (offre) {
            this.offre = offre;
            this.offre.href = offre._links.self.href;
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

  gotoList() {
    this.router.navigate(['/all-offres']);
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
