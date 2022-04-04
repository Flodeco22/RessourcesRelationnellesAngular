import { DatePipe, formatDate } from '@angular/common';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Ressource } from 'src/app/interfaces/ressource';

@Injectable({
  providedIn: 'root'
})
export class RessourcesService {
  datePipe !: DatePipe;
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


  public ajouterRessource(ajoutRessource: Ressource){
    //A compléter avec l'API
    
    let titre = ajoutRessource.titre;
    let datePublication = formatDate(new Date(), 'dd-MM-yyyy','en') ;
    let dateModification = datePublication;
    let visibilite = ajoutRessource.visibilite;
    let repContenu = ajoutRessource.repContenu;
    let validation = false;
    let nbVues = 0;
    let archive = false;
    let idCategorie = ajoutRessource.idCategorie;
    let idTypeRessource = ajoutRessource.idTypeRessource;
    let idAuteur = 1;

    console.log('--AjoutRessource--');
    console.log(titre);
    console.log(datePublication);
    console.log(dateModification);
    console.log(visibilite);
    console.log(repContenu);
    console.log(validation); 
    console.log(nbVues);
    console.log(archive);
    console.log(idCategorie);
    console.log(idTypeRessource);
    console.log(idAuteur);

    //Les ressources à afficher dans la galerie des ressources
    

    return true;

  }


  public modifierRessource(modifierRessource: Ressource){
    //A compléter avec l'API
    let id = modifierRessource.id;
    let titre = modifierRessource.titre;
    let dateModification = formatDate(new Date(), 'dd-MM-yyyy','en');
    let visibilite = modifierRessource.visibilite;
    let repContenu = modifierRessource.repContenu;
    let validation = false;
    let nbVues = 0;
    let archive = false;
    let idCategorie = modifierRessource.idCategorie;
    let idTypeRessource = modifierRessource.idTypeRessource;
    let idAuteur = 1;

    console.log('--ModificationRessource--');
    console.log(id);
    console.log(titre);
    console.log(dateModification);
    console.log(visibilite);
    console.log(repContenu);
    console.log(validation); 
    console.log(nbVues);
    console.log(archive);
    console.log(idCategorie);
    console.log(idTypeRessource);
    console.log(idAuteur);

    //Les ressources à afficher dans la galerie des ressources
    

    return true;

  }
}
