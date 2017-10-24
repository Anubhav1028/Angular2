import { PipeTransform,Pipe} from '@angular/core'

@Pipe({
    name: 'cusEmlPipe'
})

export class CustomEmplPipe implements PipeTransform{

    transform(value: string, empl: any): string {
        if (empl.gender.toLowerCase() === 'male') {
            return "Mr." + empl.gender;
        }
        else {
            return "Ms." + empl.gender;
        }
    }

}