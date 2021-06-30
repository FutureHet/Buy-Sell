import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[],
    //  args: any[]
    sortField: string,
    sortDirection: string
     ): any {
    // const sortField = args[0];
    // const sortDirection = args[1];
    let multiplier = 1;

    if(value.length === 0 || sortField === '') {
      return value;
    }

    if(sortDirection === 'High-Low') {
      multiplier = -1;
    }

    debugger;

    return value.sort((a: any, b: any) => {
      debugger;
      if(a[sortField] < b[sortField]) {
        return -1*Number(multiplier);
      } else if(a[sortField] > b[sortField]) {
        return 1*Number(multiplier);
      } else {
        return 0;
      }
    })

    ;
  }

}
