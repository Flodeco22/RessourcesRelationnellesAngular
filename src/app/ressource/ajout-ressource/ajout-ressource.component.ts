import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RessourcesService } from 'src/app/services/ressources/ressources.service';

@Component({
  selector: 'app-ajout-ressource',
  templateUrl: './ajout-ressource.component.html',
  styleUrls: ['./ajout-ressource.component.scss']
})
export class AjoutRessourceComponent implements OnInit {
  ajouRessourceForm!: FormGroup;

  constructor(private ressourceService: RessourcesService,
    private router: Router, private formBuilder: FormBuilder ) {
      
    }
  ngOnInit() {
    this.ajouRessourceForm  =  this.formBuilder.group({
      titre: ['', Validators.required],
      visibilite: ['', Validators.required],
      repContenu: ['', Validators.required],
      idCategorie: ['', Validators.required],
      idTypeRessource: ['', Validators.required]
    });
}

ajouterRessource(){


  if(this.ajouRessourceForm.value.visibilite == "privé") {
    this.ajouRessourceForm.value.visibilite = true;
  }
  else {
    this.ajouRessourceForm.value.visibilite = false;
  }

  if(this.ajouRessourceForm.invalid){
    return;
  }

  this.ressourceService.ajouterRessource(this.ajouRessourceForm.value);

  this.router.navigateByUrl('/ressources');
}

}
