import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'FilterByName'})
export class FilterByName implements PipeTransform {

    transform(series: any[], queryFilter: string) {
        if (queryFilter) {
            return series.filter(img => img.title.toLocaleLowerCase().trim().includes(queryFilter));
        } else {
            return series;
        }
    }
}
