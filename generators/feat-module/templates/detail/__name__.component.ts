import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import {FormGroup, FormControl, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'btpn-<%= featureFileName %>-detail',
  templateUrl: './<%= featureFileName %>-detail.component.html',
  styleUrls: ['./<%= featureFileName %>-detail.component.css']
})
export class <%= featureName %>DetailComponent implements OnInit {
  detailForm: FormGroup;

  constructor(private router:Router,private route: ActivatedRoute){}

  ngOnInit() {
    this.detailForm = new FormGroup({
      <%- formGroupDetail %>
    });
  }

  onSubmitTask(){
    console.log('Execute task done...');
  }

  onGoToList(){
    this.router.navigate(['../<%= featureListPath %>'], { relativeTo: this.route });
  }
}
