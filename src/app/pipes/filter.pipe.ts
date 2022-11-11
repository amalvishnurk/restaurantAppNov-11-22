import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  transform(restaurantList: any[], filterString: String, propName: any): any[] {
    const result: any = []
    if (!restaurantList || filterString == '' || propName == '') {
      return restaurantList
    }

    restaurantList.forEach((restaurant: any) => {
      console.log(restaurant[propName]);
      
      if (restaurant[propName].trim().toLowerCase().includes(filterString.toLowerCase())) {
        result.push(restaurant)
        console.log(result);

      }
    })
    return result


  }

}
