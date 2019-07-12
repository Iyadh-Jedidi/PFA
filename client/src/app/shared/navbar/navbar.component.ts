import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, NavigationStart } from '@angular/router';
import { Location, PopStateEvent } from '@angular/common';
import {AuthentificationService} from '../../services/authentification.service';
import {CookieService} from 'ngx-cookie-service';
import {ApiCompteService} from '../../services/compte/api-compte.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    public isCollapsed = true;
    private lastPoppedUrl: string;
    private yScrollStack: number[] = [];
    compte: any = {};
    id = localStorage.getItem('id');


    constructor(public location: Location, private router: Router, private loginService: AuthentificationService,
                private cookieService: CookieService, private apiCompte: ApiCompteService) {
    }

    ngOnInit() {
        if (this.id!=null){
        this.apiCompte.get(this.id).subscribe((compte: any) => {
            this.compte = compte;
        });
    }
        this.router.events.subscribe((event) => {
        this.isCollapsed = true;
        if (event instanceof NavigationStart) {
           if (event.url !== this.lastPoppedUrl) {
               this.yScrollStack.push(window.scrollY);
           }
       } else if (event instanceof NavigationEnd) {
           if (event.url === this.lastPoppedUrl) {
               this.lastPoppedUrl = undefined;
               window.scrollTo(0, this.yScrollStack.pop());
           } else {
               window.scrollTo(0, 0);
           }
       }
     });
     this.location.subscribe((ev: PopStateEvent) => {
         this.lastPoppedUrl = ev.url;
     });


    }
    load(newLocation) {

        window.location = newLocation;

    }



    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if( titlee === '/home' ) {
            return true;
        }
        else {
            return false;
        }
    }

    isCompte() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if ( titlee === '/admin/comptes' ) {
            return true;
        } else {
            return false;
        }
    }
    isOffre() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if ( titlee === '/offres' ) {
            return true;
        } else {
            return false;
        }
    }
    isFormation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());

        if ( titlee === '/formation' ) {
            return true;
        } else {
            return false;
        }
    }

    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if ( titlee === '/documentation' ) {
            return true;
        } else {
            return false;
        }
    }
}
