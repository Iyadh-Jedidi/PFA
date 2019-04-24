import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiCompteService} from '../services/compte/api-compte.service';
import {CookieService} from 'ngx-cookie-service';
import {Subscription} from 'rxjs';
import {NgForm} from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {
    model = {
        left: true,
        middle: false,
        right: false
    };
    test = true;
    focus;
    focus1;
    comptes: Array <any>;
    constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiCompteService) {
    this.apiService.getAll().subscribe(data => {
      this.comptes = data;
    });
  }

  compte: any = {};
  sub: Subscription;
  testid = ''
  ngOnInit() {

    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      this.testid = id;
      if (id) {
        console.log(id);
        this.apiService.get(id).subscribe((compte: any) => {
          if (compte) {
            this.compte = compte;
            this.compte.href = compte._links.self.href;
          } else {
            console.log(`Compte with id '${id}' not found, returning to list`);
            this.gotoList();
          }
        });
      }
    });
  }
  gotoList() {
    this.router.navigate(['/home']);
  }
  save(form: NgForm) {
    this.apiService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }
  alert() {
  window.alert('mise à jour avec succès');
}


}
