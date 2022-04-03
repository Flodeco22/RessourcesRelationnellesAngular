import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ressource } from '../interfaces/ressource';
import { RessourcesService } from '../services/ressources/ressources.service';

@Component({
  selector: 'app-galerie-ressources',
  templateUrl: './galerie-ressources.component.html',
  styleUrls: ['./galerie-ressources.component.scss']
})
export class GalerieRessourcesComponent implements OnInit {

  ressourcesForm!: FormGroup;
  tabRessources: Array<Ressource> = [];
  valueMesRessource: String = "Toutes les ressources";

  constructor(private ressourcesService: RessourcesService,
    private router: Router, private formBuilder: FormBuilder ) {
      
    }

  ngOnInit(): void {
    this.ressourcesForm = this.formBuilder.group({
      ordonner: ['', Validators.required],
      ressourceNom: [''],
      mesRessources: [this.valueMesRessource],
      auteurNom: [''],
      typeDeRessource: [''],
      categorieRessource: [''],
  });
  }

  rechercherRessources() {
    this.tabRessources = this.ressourcesService.rechercherRessource(this.ressourcesForm);
  }

  mesRessources() {    
    this.valueMesRessource = this.valueMesRessource == "Mes Ressources" ? "Toutes les ressources" : "Mes Ressources";
    this.ressourcesForm.value.mesRessources = this.valueMesRessource;
  }

}
