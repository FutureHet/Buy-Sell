import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Property } from 'src/app/model/property';
import { HousingService } from 'src/app/services/housing.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<Property>{

  constructor(
    private route: Router,
    private housingServie: HousingService
  ) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
    Observable<Property> | Promise<Property>  {
      const propId = route.params['id'];

      return this.housingServie.getProperty(Number(propId)).pipe(
        catchError((error: any) => {
          this.route.navigate(['/']);
          return of(new Property());
        })
      );
    }

}
