import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { OffresComponent } from './Admin/offres/offres.component';
import { ProfileComponent } from './profile/profile.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SectionsModule } from './sections/sections.module';

import { LoginComponent } from './login/login.component';
import {ApiCompteService} from './services/compte/api-compte.service';
import {CookieService} from 'ngx-cookie-service';
import {HttpClientModule} from '@angular/common/http';
import { LogoutComponent } from './logout/logout.component';
import {AuthGaurdService} from './services/auth-gaurd.service';
import {AuthentificationService} from './services/authentification.service';
import { FormationComponent } from './formation/formation.component';
import { EditFormationComponent } from './formation/edit-formation/edit-formation.component';
import { DemandeFormationComponent } from './formation/demande-formation/demande-formation.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'profile/:id',
        component: ProfileComponent,
        canActivate: [AuthGaurdService]
    },
    {
        path: 'register',
        component: SignupComponent,
        canActivate: [!AuthGaurdService]

    },
    {
        path: 'offers',
        component: OffresComponent },
    {
         path: 'login',
        component: LoginComponent
    },
    {   path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'logout',
        component: LogoutComponent,
        canActivate: [AuthGaurdService]
    },
    {
        path: 'offres',
        component: OffresComponent,


    },
    {
      path: 'responsable/formation',
      component: FormationComponent,
      canActivate: [AuthGaurdService]
    },
      {
      path: 'responsable/formation/:id',
      component: EditFormationComponent,
      canActivate: [AuthGaurdService]
    },
];

@NgModule({
  declarations: [
    HomeComponent,
    AppComponent,
    SignupComponent,
    OffresComponent,
    ProfileComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    LogoutComponent,
    FormationComponent,
    EditFormationComponent,
    DemandeFormationComponent,
  ],
  imports: [
      BrowserModule,
      NgbModule.forRoot(),
      FormsModule,
      RouterModule,
      HttpClientModule,
      SectionsModule,
      RouterModule.forRoot(routes)

  ],
  providers: [ApiCompteService, CookieService, AuthentificationService , AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule { }
