import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Utilisateur } from 'src/app/interfaces/utilisateur';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  public seConnecter(userInfo: Utilisateur){
    if(userInfo.email == "admin@admin.com" && userInfo.password == "admin") {
      sessionStorage.setItem('ACCESS_TOKEN', "access_token");
    }
  }
  public estConnecte(){
    return sessionStorage.getItem('ACCESS_TOKEN') !== null;

  }
  public deconnecter(){
    sessionStorage.removeItem('ACCESS_TOKEN');
  }
  
  public sendMdpOublier(formEmail : FormGroup){
    console.log('--sendMdpOublierAuth--');
    console.log(formEmail.value.email);
  }

  public newMdp(formMdp : FormGroup){
    console.log('--newMdpAuth--');
    console.log(formMdp.value.newPassword);
    console.log(formMdp.value.newPasswordConfirm);
  }  
    
  public getToken() {
    return sessionStorage.getItem('ACCESS_TOKEN');
  }
}