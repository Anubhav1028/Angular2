"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
    }
    EmployeeService.prototype.getListOfEmpls = function () {
        return [
            { code: 1, name: 'Anubhav', gender: 'Male', annualSalary: 4800.123, dateOfBirth: '10/10/90' },
            { code: 2, name: 'Abhshek', gender: 'Male', annualSalary: 5800.876556, dateOfBirth: '10/10/91' },
            { code: 3, name: 'Apporva', gender: 'Female', annualSalary: 6800.35566, dateOfBirth: '10/11/92' },
            { code: 4, name: 'nidhi', gender: 'Female', annualSalary: 6800, dateOfBirth: '10/11/92' },
            { code: 5, name: 'Akshay', gender: 'Female', annualSalary: 6800, dateOfBirth: '10/11/92' }
        ];
    };
    EmployeeService = __decorate([
        core_1.Injectable()
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map