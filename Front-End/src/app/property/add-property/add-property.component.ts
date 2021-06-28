import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IPropertyBase } from 'src/app/model/ipropertybase';

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

  // addPropertyForm!: FormGroup;

  propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
  furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']

  propertyView : IPropertyBase = {
    Id: null,
    SellRent: null,
    Name: "",
    PType: null,
    FType: null,
    Price: null,
    BHK: null,
    BuiltArea:  null,
    City: "",
    RTM:  null ,
  };

  constructor(private fb: FormBuilder, private router: Router) { }

  ngOnInit() {
    // this.CreateAddPropertyForm();
  }

  // CreateAddPropertyForm() {
  //   this.addPropertyForm = this.fb.group({
  //     SellRent: [null, Validators.required],
  //     PType: [null, Validators.required],
  //     Name: [null, Validators.required],
  //     Price: [null, Validators.required],
  //     BuildArea: [null, Validators.required]
  //   })
  // }

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
