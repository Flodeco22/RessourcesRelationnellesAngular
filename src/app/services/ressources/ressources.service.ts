import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ressource } from 'src/app/interfaces/ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {

  constructor() { }


  public rechercherRessource(filtresRessource: FormGroup){
    //A compléter avec l'API

    let ordonner = filtresRessource.value.ordonner;
    let ressourceNom = filtresRessource.value.ressourceNom;
    let auteurNom = filtresRessource.value.auteurNom;
    let typeDeRessource = filtresRessource.value.typeDeRessource;
    let categorieRessource = filtresRessource.value.categorieRessource;
    let mesRessources = filtresRessource.value.mesRessources;

    console.log('--RechercheRessource--');
    console.log(ordonner);
    console.log(ressourceNom)
    console.log(auteurNom);
    console.log(typeDeRessource);
    console.log(categorieRessource);
    console.log(mesRessources);

    //Les ressources à afficher dans la galerie des ressources
    let ressourcesTab : Array<Ressource> = [];

    return ressourcesTab;

  }

}
