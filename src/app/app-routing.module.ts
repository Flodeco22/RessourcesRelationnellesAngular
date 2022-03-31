import { NgModule } from '@angular/core';
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
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
