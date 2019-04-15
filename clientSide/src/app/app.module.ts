import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ComptesComponent } from './compte/comptes/comptes.component';
import {HttpClientModule} from '@angular/common/http';
import {ApiCompteService} from './shared/compte/apiCompte.service';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CompteEditComponent } from './compte/compte-edit/compte-edit.component';
import { OffresComponent } from './offre/offres/offres.component';
import { OffreEditComponent } from './offre/offre-edit/offre-edit.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import {AuthGaurdService} from './shared/auth-gaurd.service';


const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent},
  {
    path: 'all-comptes',
    component: ComptesComponent,
    canActivate:[AuthGaurdService]
  },
  {
    path: 'compte-add',
    component: CompteEditComponent
  },
  {
    path: 'compte-edit/:id',
    component: CompteEditComponent
  },
  {
    path: 'all-offres',
    component: OffresComponent
  },
  {
    path: 'offre-add',
    component: OffreEditComponent
  },
  {
    path: 'offre-edit/:id',
    component: OffreEditComponent
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
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ApiCompteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
