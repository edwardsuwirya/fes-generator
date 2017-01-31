import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {<%= featureName %>} from '../<%= featureFileName %>';

@Component({
  selector: 'btpn-<%= featureFileName %>-list',
  templateUrl: './<%= featureFileName %>-list.component.html',
  styleUrls: ['./<%= featureFileName %>-list.component.css']
})
export class <%= featureName %>ListComponent implements OnInit {


  constructor(private router:Router,private route: ActivatedRoute){}

  ngOnInit() {
  }

  onNewModel(){
    this.router.navigate(['../<%= featureDetailPath %>'], { relativeTo: this.route });
  }

  onUpdateModel(){

  }

  onDeleteModel(){

  }
}
