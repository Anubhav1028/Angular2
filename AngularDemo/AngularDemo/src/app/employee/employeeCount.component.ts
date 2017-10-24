import { Component,Input,Output,EventEmitter} from '@angular/core'

@Component({
    selector: 'empl-radio',
    templateUrl: 'app/employee/employeeCount.component.html',
    styleUrls: ['app/employee/employeeCount.component.css']
})

export class EmployeeCountComponent {
    @Input()
    all: number;
    @Input()
    male: number;
    @Input()
    female: number;

    selectedRadioButtonVal: string = 'All';

    @Output()
    changeRadioButtonVal: EventEmitter<string> = new EventEmitter<string>();

    onRadioButtonValChange(): void {
        this.changeRadioButtonVal.emit(this.selectedRadioButtonVal);  
        console.log(this.selectedRadioButtonVal); 
    }

}