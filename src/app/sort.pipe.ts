import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
   name: 'sort' 
})

export class sortPipe implements PipeTransform {

  transform(value: any) : any { 
     if(value.length === 0) {
        return value; 
     }
       this.sort(value);
    //    value.pop();
       return value;
  }

  sort(value) {
     value.sort(function(a, b) {
       let x = a.name.toLowerCase();
       let y = b.name.toLowerCase();
       if(x < y) { return -1};
       if(x > y) { return 1};
       return 0;
     })
  }
}