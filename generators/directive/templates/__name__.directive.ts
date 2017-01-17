import {Directive, ElementRef, Renderer, OnInit} from '@angular/core';

@Directive({
  selector: '[btpn<%= directiveName %>]'
})
export class <%= directiveName %>Directive implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer) {

  }

  ngOnInit() {
  }
}
