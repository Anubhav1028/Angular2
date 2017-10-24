import { Component } from "@angular/core"

@Component({
    selector: 'my-empl',
    templateUrl: 'app/employee/employee.component.html',
    styleUrls: ['app/employee/employee.component.css']
})

export class EmployeeComponent {
    colSpan: number = 2;
    firstName: String = "Anubhav";
    lastName: String = "Nigam";
    gender: String = "Male";
    age: number = 27;
    showDetails: boolean = false;
    toggleDetails(): void{
        this.showDetails = !this.showDetails;
    }
}