import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TestPageComponent } from './test-page/test-page.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { LastResourcesListComponent } from './accueil/last-resources-list/last-resources-list.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { GalerieRessourcesComponent } from './galerie-ressources/galerie-ressources.component';
import { RessourceComponent } from './ressource/ressource.component';
import { CompteComponent } from './compte/compte.component';
import { ModificationComponent } from './ressource/modification/modification.component';
import { VisionComponent } from './ressource/vision/vision.component';
import { AjoutRessourceComponent } from './ressource/ajout-ressource/ajout-ressource.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdpOublieComponent } from './mdp-oublie/mdp-oublie.component';
import { NewMdpComponent } from './mdp-oublie/new-mdp/new-mdp.component';

@NgModule({
  declarations: [
    AppComponent,
    TestPageComponent,
    HeaderComponent,
    FooterComponent,
    InscriptionComponent,
    AccueilComponent,
    LastResourcesListComponent,
    ConnexionComponent,
    GalerieRessourcesComponent,
    RessourceComponent,
    CompteComponent,
    ModificationComponent,
    VisionComponent,
    AjoutRessourceComponent,
    MdpOublieComponent,
    NewMdpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
