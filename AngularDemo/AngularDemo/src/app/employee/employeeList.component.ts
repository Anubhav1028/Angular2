import { Component,OnInit} from '@angular/core';
import { IEmployee } from './IEmployee';
import { EmployeeService } from '../Service/employee.service'

@Component({
    selector: 'empl-list',
    templateUrl: 'app/employee/employeeList.component.html',
    styleUrls: ['app/employee/employeeList.component.css'],
    providers: [EmployeeService]
})

export class EmployeeListComponent implements OnInit{
    employeeList: IEmployee[];
    constructor(private emplService: EmployeeService) {
       
    }
    ngOnInit() {
        this.employeeList = this.emplService.getListOfEmpls();
    }
    //getEmplist(): void {
    //    this.employeeList = [
    //        { code: 1, name: 'Anubhav', gender: 'Male', annualSalary: 4800, dateOfBirth: '10/10/90' },
    //        { code: 2, name: 'Abhshek', gender: 'Male', annualSalary: 5800, dateOfBirth: '10/10/91' },
    //        { code: 3, name: 'Apporva', gender: 'Female', annualSalary: 6800, dateOfBirth: '10/11/92' },
    //        { code: 4, name: 'nidhi', gender: 'Female', annualSalary: 6800, dateOfBirth: '10/11/92' }
    //    ]
    //}

    selectedRadioButtonval: string = "All"

    onRadioButtonChange(selectedRadioButtonVal: string): void {
        this.selectedRadioButtonval = selectedRadioButtonVal;
    }

    trackByEmplCode(empl: any): string {
        return empl.code;
    }
    getTotalNoOFEmpls(): number {
        return this.employeeList.length;
    }
    getTotalNoOfMale(): number {
        return this.employeeList.filter(e => e.gender === 'Male').length;
    }
    getTotalNoOfFemale(): number {
        return this.employeeList.filter(e => e.gender === 'Female').length;
    }
    
} 