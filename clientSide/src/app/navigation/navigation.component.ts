import { Component, OnInit } from '@angular/core';
import {AuthentificationService} from '../shared/authentification.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {



  constructor(private loginService: AuthentificationService) { }

  ngOnInit() {
  }


}
