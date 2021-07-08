import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IPropertyBase } from '../model/ipropertybase';
import { Property } from '../model/property';
import { getSafePropertyAccessString } from '@angular/compiler';


@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http: HttpClient) { }

  getAllCities(): Observable<string[]> {
    return this.http.get<string[]>('http://localhost:5000/api/City');
  }

  getProperty(id: number): Observable<Property> {

    // throw new Error();
    return this.getAllProperties().pipe(

      map((propertiesArray: any) => {
        // throw new Error("Some Error");
        return propertiesArray.find((p: any) => p.Id == id);
      })
    );
  }

  getAllProperties(SellRent?: number): Observable<Property[]>{
    return this.http.get('data/properties.json').pipe(
      map((data:any) => {
        const propertiesArray: Array<Property> = [];
        // const selectedList: Array<any> = [];
        // selectedList.push(2,4,6);

        // selectedList.forEach((e:any) => {
        //   var specificData = data[e - 1];
        //   propertiesArray.push(specificData);
        // });
        let rec_property = JSON.parse(localStorage.getItem('newProp')!);

        if(rec_property !== null) {
          for (const id in rec_property) {
            if(SellRent) {
              if (rec_property.hasOwnProperty(id) && rec_property[id].SellRent === SellRent) {
                propertiesArray.push(rec_property[id]);
              }
            } else {
              propertiesArray.push(rec_property[id]);
            }
          }
        }



        for (const id in data) {
          if(SellRent) {
            if (data.hasOwnProperty(id) && data[id].SellRent === SellRent) {
              propertiesArray.push(data[id]);
            }
          } else {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    );

    return this.http.get<Property[]>('data/properties.json');
  }

  addProperty(property: Property) {
      // localStorage.setItem('newProp', JSON.stringify(property));
      // let properties = [property];
      let rec_property: any[] = JSON.parse(localStorage.getItem('newProp')!) || [];
      rec_property.push(property);
      // debugger;
      localStorage.setItem('newProp', JSON.stringify(rec_property));
  }

  newPropID() {
    if(localStorage.getItem('PID')) {
        localStorage.setItem('PID', String(Number(localStorage.getItem('PID')) +1));
        return Number(localStorage.getItem('PID'));
    } else {
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
