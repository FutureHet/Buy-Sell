import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http: HttpClient) { }

  getAllProperties(){
    return this.http.get('data/properties.json').pipe(
      map((data:any) => {
        const propertiesArray: Array<any> = [];
        // const selectedList: Array<any> = [];
        // selectedList.push(2,4,6);

        // selectedList.forEach((e:any) => {
        //   var specificData = data[e - 1];
        //   propertiesArray.push(specificData);
        // });

        for (const id in data) {
          if (data.hasOwnProperty(id)) {
            propertiesArray.push(data[id]);
          }
        }
        return propertiesArray;
      })
    )
  }
}
