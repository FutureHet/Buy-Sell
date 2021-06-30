import { HousingService } from './../../services/housing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IPropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  properties: Array<IPropertyBase> = [];
  City = '';
  SearchCity= '';
  SortbyParam = '';
  SortDirection = 'Low-High';

  constructor(private route: ActivatedRoute,private housingService: HousingService) { }

  ngOnInit(): void {
    if(this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.housingService.getAllProperties(this.SellRent).subscribe(
      data => {
        this.properties = data;
        // const newProperty = JSON.parse(localStorage!.getItem('newProp')!);


        // if(newProperty.SellRent === this.SellRent) {
        //   this.properties = [newProperty, ...this.properties];
        // }

        console.log(data);
      }, err => {
        console.log(err);
      }
    );
  }

  onCityFilter() {
    this.SearchCity = this.City;
  }

  onSortDirection() {
    if(this.SortDirection === 'High-Low') {
      this.SortDirection = 'Low-High';
    } else {
      this.SortDirection = 'High-Low';
    }
  }
}

