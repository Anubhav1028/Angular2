"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.header = "Employee Details";
        this.imagePath = "http://www.testingxperts.com/wp-content/themes/testingxperts/img/logo.png";
        this.firstName = 'Testing';
        this.lastName = 'Xperts';
        this.applyBoldClass = true;
        this.applyItalicClass = false;
        this.inputValue = 'Anubhav';
        this.name = 'Damco';
        this.isBold = true;
        this.fontSize = 20;
    }
    AppComponent.prototype.getDomain = function () {
        return this.firstName + "" + this.lastName;
    };
    ;
    AppComponent.prototype.toggleClasses = function () {
        var classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass
        };
        return classes;
    };
    ;
    AppComponent.prototype.applyStyles = function () {
        var styles = {
            fontWeight: this.isBold ? 'bold' : 'normal',
            'fontSize.px': this.fontSize
        };
        return styles;
    };
    ;
    AppComponent.prototype.buttonClick = function () {
        console.log('clicked');
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/app.component.html',
            styleUrls: ['app/app.component.css']
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map