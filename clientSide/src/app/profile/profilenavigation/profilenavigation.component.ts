import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../../shared/authentification.service';

@Component({
  selector: 'app-profilenavigation',
  templateUrl: './profilenavigation.component.html',
  styleUrls: ['./profilenavigation.component.css']
})
export class ProfilenavigationComponent implements OnInit {



  constructor(private loginService: AuthentificationService) { }

  ngOnInit() {
  }


}
