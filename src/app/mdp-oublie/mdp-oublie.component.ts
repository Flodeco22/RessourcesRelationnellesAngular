import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utilisateur } from '../interfaces/utilisateur';
import { AuthService } from '../services/auth/auth.service';
@Component({
  selector: 'app-mdp-oublie',
  templateUrl: './mdp-oublie.component.html',
  styleUrls: ['./mdp-oublie.component.scss']
})
export class MdpOublieComponent implements OnInit {
  mdpOublieForm!: FormGroup;
  isSubmitted = false;
  isUnknown: boolean = false;
  constructor(private formBuilder: FormBuilder ,private router: Router,
     private authService: AuthService) { }

  ngOnInit() {
    this.mdpOublieForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }
  get formControls() { return this.mdpOublieForm.controls; }

  mdpOublie(){
    this.isSubmitted = true;

    if(this.mdpOublieForm.invalid){
      return;
    }
  
    this.authService.sendMdpOublier(this.mdpOublieForm.value);
  
    this.router.navigateByUrl('/connexion');
  }
}
