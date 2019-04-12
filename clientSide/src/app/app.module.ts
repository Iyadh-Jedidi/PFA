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


const appRoutes: Routes = [
  { path: '', redirectTo: '/all-comptes', pathMatch: 'full' },
  {
    path: 'all-comptes',
    component: ComptesComponent
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
    OffreEditComponent
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
