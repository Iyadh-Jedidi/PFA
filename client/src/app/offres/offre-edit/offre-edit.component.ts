import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ApiOffreService} from '../../services/offre/api-offre.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-offre-edit',
  templateUrl: './offre-edit.component.html',
  styleUrls: ['./offre-edit.component.css']
})
export class OffreEditComponent implements OnInit {

  offre: any = {};

  sub: Subscription;

  constructor(private datePipe: DatePipe,
              private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiOffreService) {
  }
  transformDate(date) {
    console(date);
    var d= new Date (date);
    let yyyy = d.getFullYear();
    let mm= d.getMonth();
    let dd = d.getDay();
    let dateFormat = yyyy+"-"+mm+"-"+dd;
    console.log(dateFormat)
    return dateFormat;

    // return this.datePipe.transform(d, 'YYYY-MM-dd'); //whatever format you need. 
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
    this.router.navigate(['/admin/offres']);
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
