import { Component, OnInit , Input} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-vision',
  templateUrl: './vision.component.html',
  styleUrls: ['./vision.component.scss']
})
export class VisionComponent implements OnInit {

  id:number = 0;
  constructor(private route: ActivatedRoute) {}
  paramsSubscription: Subscription = new Subscription;

  ngOnInit() {
    this.paramsSubscription = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
    });
    
  } 
}
