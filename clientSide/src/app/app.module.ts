import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComptesComponent } from './Admin/compte/comptes/comptes.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiCompteService} from './shared/compte/apiCompte.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CompteEditComponent } from './Admin/compte/compte-edit/compte-edit.component';
import { OffresComponent } from './Admin/offre/offres/offres.component';
import { OffreEditComponent } from './Admin/offre/offre-edit/offre-edit.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {AuthGaurdService} from './shared/auth-gaurd.service';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { FormationComponent } from './formation/formation.component';
import { SignupComponent } from './signup/signup.component';
import {CookieService} from 'ngx-cookie-service';
import { DemandeComponent } from './formation/demande-formation/demande.component';
import { EntretientsComponent } from './entretients/entretients.component';
import { RecrutementsComponent } from './recrutements/recrutements.component';
import { EditFormationComponent } from './formation/edit-formation/edit-formation.component';


const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'logout',
    component: LogoutComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path : 'signup',
    component: SignupComponent
  },
  {
    path: 'admin/comptes',
    component: ComptesComponent,
    canActivate: [AuthGaurdService]
  },
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
  path: 'responsable/formation',
  component: FormationComponent,
  canActivate: [AuthGaurdService]
},
  {
  path: 'formation',
  component: FormationComponent,
  canActivate: [AuthGaurdService]
},
  {
    path: 'compte-add',
    component: CompteEditComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'admin/comptes/:id',
    component: CompteEditComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'admin/offres',
    component: OffresComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'offre-add',
    component: OffreEditComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'ajouter-formation',
    component: EditFormationComponent,
    canActivate: [AuthGaurdService]
  },
  {
    path: 'admin/offres/:id',
    component: OffreEditComponent,
    canActivate: [AuthGaurdService]
  }

];
@NgModule({
  declarations: [
    AppComponent,
    ComptesComponent,
    CompteEditComponent,
    OffresComponent,
    OffreEditComponent,
    NavigationComponent,
    LoginComponent,
    LogoutComponent,
    HomeComponent,
    ProfileComponent,
    FormationComponent,
    SignupComponent,
    DemandeComponent,
    EntretientsComponent,
    RecrutementsComponent,
    EditFormationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [ApiCompteService, CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
