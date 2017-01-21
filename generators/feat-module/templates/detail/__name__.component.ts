import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btpn-<%= featureFileName %>-detail',
  templateUrl: './<%= featureFileName %>-detail.component.html',
  styleUrls: ['./<%= featureFileName %>-detail.component.css']
})
export class <%= featureName %>DetailComponent implements OnInit {

  ngOnInit() {
  }
}
