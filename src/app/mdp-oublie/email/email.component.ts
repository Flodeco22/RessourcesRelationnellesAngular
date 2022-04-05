import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

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
  
    this.authService.sendMdpOublier(this.mdpOublieForm);
  
    this.router.navigateByUrl('/mdp-oublie/new-password');
  }
}
