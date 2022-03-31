import { Component, OnInit } from '@angular/core';
import { RedirectService } from '../services/redirect/redirect.service';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {  

  constructor(public redirectService: RedirectService, public authService: AuthService) { }

}
