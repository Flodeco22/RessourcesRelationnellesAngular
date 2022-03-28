import { Component, OnInit } from '@angular/core';
import { RedirectService } from 'src/app/services/redirect/redirect.service';

@Component({
  selector: 'app-last-resources-list',
  templateUrl: './last-resources-list.component.html',
  styleUrls: ['./last-resources-list.component.scss']
})
export class LastResourcesListComponent{

  constructor(public redirectService: RedirectService) {
    
  }

}
