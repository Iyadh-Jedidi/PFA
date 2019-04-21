import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {ApiCompteService} from '../shared/compte/apiCompte.service';
import {NgForm} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  comptes: Array <any>;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private apiService: ApiCompteService) {
    this.apiService.getAll().subscribe(data => {
      this.comptes = data;
    });
  }

  private cookieService: CookieService;
  compte: any = {};
  sub: Subscription;
  id = this.cookieService.get( 'id' );
  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
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
    this.router.navigate(['/profile/:id']);
  }
  save(form: NgForm) {
    this.apiService.save(form).subscribe(result => {
      this.gotoList();
    }, error => console.error(error));
  }

}
