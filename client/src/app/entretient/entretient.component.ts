import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ApiOffreService} from 'src/app/services/offre/api-offre.service';
import { ApiCompteService } from 'src/app/services/compte/api-compte.service';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-entretient',
  templateUrl: './entretient.component.html',
  styleUrls: ['./entretient.component.css']
})
export class EntretientComponent implements OnInit {
    offres: any = {};
    offre: Array <any> ;
    compte: any = {};
    private idCompte = localStorage.getItem('id');
    private idOffre;
    sub: Subscription;

//   constructor(private route: ActivatedRoute,
//     private router: Router,
//     private apiService: ApiOffreService,
//     private apiCompte: ApiCompteService,) { }

//  ngOnInit() {
//     this.apiService.getAll().subscribe(data => {
//       this.offre = data;
//     });
//     this.sub = this.route.params.subscribe(params => {
//       const id = params.id;
//       if (id) {
//         this.apiService.get(id).subscribe((offres: any) => {
//           if (offres) {
//             this.offres = offres;
//             this.offres.href = offres._links.self.href;
//             this.idOffre = offres.id;
//             console.log(this.offres.id);
//           } else {
//             console.log(`Offre with id '${id}' not found, returning to list`);
//             this.gotoList();
//           }
//         });
//       }
//     });
//   }
  gotoList() {
    this.router.navigate(['/offres']);
  }

  focus: any;
  focus1: any;
  id = localStorage.getItem('id');

  constructor(private loginService: AuthentificationService,
              private compteApiService: ApiCompteService,
              private apiService: ApiOffreService) { }

  ngOnInit() {
      this.compteApiService.get(this.id).subscribe((compte: any) => {
          this.compte = compte;
      });

      this.apiService.getAll().subscribe(data => {
          this.offres = data;
      });
  }

}
