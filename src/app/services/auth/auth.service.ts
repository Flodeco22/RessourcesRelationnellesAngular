import { Injectable } from '@angular/core';
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

  public sendMdpOublier(Email: string){
    console.log('--sendMdpOublierAuth--');
    console.log(Email);
  }

  public newMdp(utilisateur: Utilisateur , newpassword: string){
    console.log('--newMdpAuth--');
    utilisateur.password = newpassword;
    console.log(utilisateur.email);
    console.log(utilisateur.password);
  }
}