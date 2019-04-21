import { Component, OnInit } from '@angular/core';
import { AuthentificationService } from 'src/app/shared/authentification.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home-navigation',
  templateUrl: './home-navigation.component.html',
  styleUrls: ['./home-navigation.component.css']
})
export class HomeNavigationComponent implements OnInit {

  constructor(private loginService: AuthentificationService, private cookieService: CookieService) { }
   id = this.cookieService.get('id');
  ngOnInit() {
    
  }

}
