import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription/inscription.component';
import { AccueilComponent } from './accueil/accueil.component';
import { RouterModule, Routes } from '@angular/router';
import { CompteComponent } from './compte/compte.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { GalerieRessourcesComponent } from './galerie-ressources/galerie-ressources.component';
import { RessourceComponent } from './ressource/ressource.component';
import { ModificationComponent } from './ressource/modification/modification.component';
import { VisionComponent } from './ressource/vision/vision.component';
import { AjoutRessourceComponent } from './ressource/ajout-ressource/ajout-ressource.component';
import { AuthGuard } from './guards/auth.guard';
import { MdpOublieComponent } from './mdp-oublie/mdp-oublie.component';
import { EmailComponent } from './mdp-oublie/email/email.component';
import { NewMdpComponent } from './mdp-oublie/new-mdp/new-mdp.component';

const routes: Routes = [
  { path: '', component: AccueilComponent},
  { path: 'inscription', component: InscriptionComponent, canActivate: [AuthGuard] },
  { path: 'connexion', component : ConnexionComponent, canActivate: [AuthGuard]},
  { path: 'parametres', component : CompteComponent, canActivate: [AuthGuard]},
  { path: 'ressources', component : GalerieRessourcesComponent},
  { path: 'ressource/ajouter', component: AjoutRessourceComponent},
  { path: 'ressource/:id', component : RessourceComponent, children : [
    {path: '', component: VisionComponent},
    {path: 'modification', component : ModificationComponent}
  ]},
  { path: 'mdp-oublie', component: MdpOublieComponent, children : [
    {path: '', component: EmailComponent},
    {path: 'new-password', component:NewMdpComponent}
  ]},
  {path: '**',redirectTo: '/'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
