import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'btpn-<%= featureFileName %>-detail',
  templateUrl: './<%= featureFileName %>-detail.component.html',
  styleUrls: ['./<%= featureFileName %>-detail.component.css']
})
export class <%= featureName %>DetailComponent implements OnInit {
  detailForm: FormGroup;

  ngOnInit() {
    this.detailForm = new FormGroup({
      <%- formGroupDetail %>
    });
  }
}
