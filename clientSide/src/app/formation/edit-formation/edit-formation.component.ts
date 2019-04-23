import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForm} from '@angular/forms';
import {ApiformationService} from '../../shared/formation/apiformation.service';

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
              private apiService: ApiformationService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      const id = params.id;
      if (id) {
        this.apiService.get(id).subscribe((formation: any) => {
          if (formation) {
            this.formation = formation;
            this.formation.href = formation._links.self.href;
          } else {
            console.log(`Formation with id '${id}' not found, returning to list`);
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
