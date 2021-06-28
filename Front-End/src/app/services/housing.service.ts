import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<IPropertyBase[]>{
    return this.http.get('data/properties.json').pipe(
      map((data:any) => {
        const propertiesArray: Array<IPropertyBase> = [];
        // const selectedList: Array<any> = [];
        // selectedList.push(2,4,6);

        // selectedList.forEach((e:any) => {
        //   var specificData = data[e - 1];
        //   propertiesArray.push(specificData);
        // });

        for (const id in data) {
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    )
  }
}
