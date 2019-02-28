import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {
  resultArray = [];

  transform(value: any, search: any): any {
    this.resultArray = [];
    if(value.length === 0 || !search || search == '') {
      return value;
    }
    for(const item of value) {
      const filterSearch: string = search.toLowerCase(); 
      let status: string = item.status;
      let regex = new RegExp(filterSearch, 'gi');
      if(status.match(regex)) {
        this.resultArray.push(item);
      }
    }
    return this.resultArray;
  }

}
