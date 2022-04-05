import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-new-mdp',
  templateUrl: './new-mdp.component.html',
  styleUrls: ['./new-mdp.component.scss']
})
export class NewMdpComponent implements OnInit {

  newMdpForm!: FormGroup;
  isUnknown: boolean = true;
  isSubmitted: boolean = false;
  isSame: boolean = true;
  newPassword!: string;
  newPasswordConfirm!: string;
  constructor(private formBuilder: FormBuilder, private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
    this.newMdpForm = this.formBuilder.group({
      newPassword: ['', Validators.required],
      newPasswordConfirm: ['', Validators.required]
    });
  }

  get formControls() { return this.newMdpForm.controls; }

  newMdp() {
    this.isSubmitted = true;



    if (this.newMdpForm.value.newPassword == this.newMdpForm.value.newPasswordConfirm) {
      this.isSame = true;
    }
    else {
      this.isSame = false;
      return;
    }

    if (this.newMdpForm.invalid) {
      return;
    }
    this.authService.newMdp(this.newMdpForm);

    this.router.navigateByUrl('/connexion');
  }
}
