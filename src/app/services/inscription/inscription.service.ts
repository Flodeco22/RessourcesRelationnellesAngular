import { Injectable } from '@angular/core';
import { Utilisateur } from 'src/app/interfaces/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class InscriptionService {

  constructor() { }

  public sInscrire(userInfo: Utilisateur){
    //A compléter avec l'API
    console.log('--Inscription--');
    console.log(userInfo.nom);
    console.log(userInfo.prenom);
    console.log(userInfo.dateNaissance);
    console.log(userInfo.email);
    console.log(userInfo.password);
    console.log(userInfo.telephone);
    console.log(userInfo.adresse);
    console.log(userInfo.codePostal);
    console.log(userInfo.ville);
    console.log(userInfo.civilite);
  }
  public estInscrit(){
    //A compléter avec l'API
    return true;
  }
}
