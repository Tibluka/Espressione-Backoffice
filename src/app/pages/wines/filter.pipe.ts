import { Pipe, PipeTransform } from '@angular/core';
import { ValidatorService } from 'src/app/services/validator/validator.service';

@Pipe({
    name: 'filter'
})
export class FilterPipe extends ValidatorService implements PipeTransform {

    transform(list: any[], filterText: string): any {
        let name
        let wineType
        if (list) {
            name = list.filter(item => this.removeAcento(item.name)?.search(new RegExp(this.removeAcento(filterText), 'i')) > -1);
            wineType = list.filter(item => this.removeAcento(item.wineType)?.search(new RegExp(this.removeAcento(filterText), 'i')) > -1);
        }
        return list ? this.return(list, name, wineType) : [];
    }

    return(list, name, wineType) {
        return list ? (name.length > 0 ? name :
            (wineType.length > 0 ? wineType : [])) : [];
    }

}
