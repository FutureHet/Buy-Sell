import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IProperty } from '../property-list/iproperty';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {

  @ViewChild('Form')
  addPropertyForm!: NgForm;

  @ViewChild('formTabs')
  staticTabs!: TabsetComponent;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']

  propertyView : IProperty = {
    Id: null,
    SellRent: null,
    Name: "",
    Type: null,
    Price: null
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack() {
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log('Form Submitted')
    console.log(this.addPropertyForm)
  }

  selectTab(tabId: number) {
    this.staticTabs.tabs[tabId].active = true;
  }
}
