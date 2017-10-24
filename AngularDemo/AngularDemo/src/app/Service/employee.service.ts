import { Injectable } from '@angular/core'
import { IEmployee } from '../employee/IEmployee'

@Injectable()
export class EmployeeService{
    getListOfEmpls(): IEmployee[] {
        return [
            { code: 1, name: 'Anubhav', gender: 'Male', annualSalary: 4800.123, dateOfBirth: '10/10/90' },
            { code: 2, name: 'Abhshek', gender: 'Male', annualSalary: 5800.876556, dateOfBirth: '10/10/91' },
            { code: 3, name: 'Apporva', gender: 'Female', annualSalary: 6800.35566, dateOfBirth: '10/11/92' },
            { code: 4, name: 'nidhi', gender: 'Female', annualSalary: 6800, dateOfBirth: '10/11/92' },
            { code: 5, name: 'Akshay', gender: 'Female', annualSalary: 6800, dateOfBirth: '10/11/92' }
        ];
    }
}