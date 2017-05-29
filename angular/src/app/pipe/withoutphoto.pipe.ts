import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'withoutphoto'
})
export class WithoutPhotoPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    let noImage = "assets/img/noimage.png";

    if(!value){
      return noImage;
    }

    return (value.length > 0) ? value : noImage;
  }

}
