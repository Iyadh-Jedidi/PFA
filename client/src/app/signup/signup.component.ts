import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ApiCompteService} from '../services/compte/api-compte.service';
import { saveAs } from 'file-saver';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {


  compte: any = {typeCompteId: 'candidat', poste: 'candidat'};

    saveFile = (blobContent: Blob, fileName: string) => {
      const blob = new Blob([blobContent], { type: 'application/octet-stream' });
      saveAs(blob, fileName);
    }


  constructor(private router: Router,
              private apiService: ApiCompteService) { }

  ngOnInit() {
  }
  gotoHome() {
    this.router.navigate((['/home']));
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
