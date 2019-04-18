import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCompteService } from '../shared/compte/apiCompte.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  compte: any = {typeCompteId:'candidat'};

  constructor(private router: Router,
              private apiService: ApiCompteService) { }

  ngOnInit() {
  }
  gotoLogin() {
    this.router.navigate(['/login']);
  }
  save(form: NgForm) {
    this.apiService.save(form).subscribe(result => {
      this.gotoLogin();
    }, error => console.error(error));
  }

}
