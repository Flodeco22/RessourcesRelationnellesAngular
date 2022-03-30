import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { InscriptionService } from '../services/inscription/inscription.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {
  inscForm!: FormGroup;
  isSubmitted  =  false;
  constructor(private inscriptionService: InscriptionService,
    private router: Router, private formBuilder: FormBuilder ) {
      
    }
    ngOnInit() {
      this.inscForm  =  this.formBuilder.group({
          nom: ['', Validators.required],
          prenom: ['', Validators.required],
          dateNaissance: ['', Validators.required],
          email: ['', Validators.required],
          password: ['', Validators.required],
          passwordConfirm: ['', Validators.required],
          telephone: ['', Validators.required],
          adresse: ['', Validators.required],
          codePostal: ['', Validators.required],
          ville: ['', Validators.required],
          civilite: ['', Validators.required],
      });
  }
  get formControls() { return this.inscForm.controls; }
  sInscrire(){
    this.inscForm.value.dateNaissance = new Date(this.inscForm.value.dateNaissance);

    if(this.inscForm.value.civilite == "true") {
      this.inscForm.value.civilite = true;
    }
    else {
      this.inscForm.value.civilite = false;
    }

    this.isSubmitted = true;
    if(this.inscForm.invalid){
      return;
    }
    this.inscriptionService.sInscrire(this.inscForm.value);

    this.router.navigateByUrl('/connexion');
  }

}
