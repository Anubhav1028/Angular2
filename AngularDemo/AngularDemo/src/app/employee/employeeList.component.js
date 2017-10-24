"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var employee_service_1 = require("../Service/employee.service");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(emplService) {
        this.emplService = emplService;
        //getEmplist(): void {
        //    this.employeeList = [
        //        { code: 1, name: 'Anubhav', gender: 'Male', annualSalary: 4800, dateOfBirth: '10/10/90' },
        //        { code: 2, name: 'Abhshek', gender: 'Male', annualSalary: 5800, dateOfBirth: '10/10/91' },
        //        { code: 3, name: 'Apporva', gender: 'Female', annualSalary: 6800, dateOfBirth: '10/11/92' },
        //        { code: 4, name: 'nidhi', gender: 'Female', annualSalary: 6800, dateOfBirth: '10/11/92' }
        //    ]
        //}
        this.selectedRadioButtonval = "All";
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        this.employeeList = this.emplService.getListOfEmpls();
    };
    EmployeeListComponent.prototype.onRadioButtonChange = function (selectedRadioButtonVal) {
        this.selectedRadioButtonval = selectedRadioButtonVal;
    };
    EmployeeListComponent.prototype.trackByEmplCode = function (empl) {
        return empl.code;
    };
    EmployeeListComponent.prototype.getTotalNoOFEmpls = function () {
        return this.employeeList.length;
    };
    EmployeeListComponent.prototype.getTotalNoOfMale = function () {
        return this.employeeList.filter(function (e) { return e.gender === 'Male'; }).length;
    };
    EmployeeListComponent.prototype.getTotalNoOfFemale = function () {
        return this.employeeList.filter(function (e) { return e.gender === 'Female'; }).length;
    };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: 'empl-list',
            templateUrl: 'app/employee/employeeList.component.html',
            styleUrls: ['app/employee/employeeList.component.css'],
            providers: [employee_service_1.EmployeeService]
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;
//# sourceMappingURL=employeeList.component.js.map