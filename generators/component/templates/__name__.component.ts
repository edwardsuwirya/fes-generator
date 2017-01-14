import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'btpn-<%= componentFileName %>',
  templateUrl: './<%= componentFileName %>.component.html',
  styleUrls: ['./<%= componentFileName %>.component.css']
})
export class <%= componentName %>Component implements OnInit {

  ngOnInit() {
  }
}
