import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btpn-<%= featureFileName %>-list',
  templateUrl: './<%= featureFileName %>-list.component.html',
  styleUrls: ['./<%= featureFileName %>-list.component.css']
})
export class <%= featureName %>ListComponent implements OnInit {

  ngOnInit() {
  }
}
