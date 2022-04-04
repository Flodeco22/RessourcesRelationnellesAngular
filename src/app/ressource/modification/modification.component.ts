import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RessourcesService } from 'src/app/services/ressources/ressources.service';
import { ActivatedRoute } from '@angular/router';
import { of, Subscription } from 'rxjs';

@Component({
  selector: 'app-modification',
  templateUrl: './modification.component.html',
  styleUrls: ['./modification.component.scss']
})
export class ModificationComponent implements OnInit {
  modifierRessourceForm!: FormGroup;
  id!: number;
  paramsSubscription: Subscription = new Subscription();

  constructor(private ressourceService: RessourcesService,
    private router: Router, private formBuilder: FormBuilder, private route: ActivatedRoute) {

  }
  ngOnInit() { 
    if(this.route.parent != null) {
      this.paramsSubscription = this.route.parent.params.subscribe(params => {
        this.id = +params['id']; // (+) converts string 'id' to a number
      });
    }  
    this.modifierRessourceForm = this.formBuilder.group({
      id: [this.id],
      titre: ['', Validators.required],
      visibilite: ['', Validators.required],
      repContenu: ['', Validators.required],
      idCategorie: ['', Validators.required],
      idTypeRessource: ['', Validators.required]

    });

  }



  modifierRessource() {


    if (this.modifierRessourceForm.value.visibilite == "privé") {
      this.modifierRessourceForm.value.visibilite = true;
    }
    else {
      this.modifierRessourceForm.value.visibilite = false;
    }

    if (this.modifierRessourceForm.invalid) {
      return;
    }

    this.ressourceService.modifierRessource(this.modifierRessourceForm.value);

    this.router.navigateByUrl('/ressources');
  }

}