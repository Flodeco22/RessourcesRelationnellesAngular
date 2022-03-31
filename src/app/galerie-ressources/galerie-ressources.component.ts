import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-galerie-ressources',
  templateUrl: './galerie-ressources.component.html',
  styleUrls: ['./galerie-ressources.component.scss']
})
export class GalerieRessourcesComponent implements OnInit {

  ressourcesForm!: FormGroup;

  constructor() { }

  ngOnInit(): void {
  }

  rechercherRessources() {
    
  }

}
