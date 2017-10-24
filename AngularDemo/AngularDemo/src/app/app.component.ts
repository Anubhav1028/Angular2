import { Component } from "@angular/core"

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styleUrls:['app/app.component.css']
})
export class AppComponent {
    header: String = "Employee Details";
    imagePath: String = "http://www.testingxperts.com/wp-content/themes/testingxperts/img/logo.png";
    firstName: String = 'Testing';
    lastName: String = 'Xperts';
    applyBoldClass: boolean = true;
    applyItalicClass: boolean = false;
    getDomain(): String {
        return this.firstName + "" + this.lastName;
    };
    inputValue: String = 'Anubhav';
    name: String = 'Damco';
    toggleClasses() {
        let classes = {
            boldClass: this.applyBoldClass,
            italicClass: this.applyItalicClass
        }
        return classes;
    };
    isBold: boolean = true;
    fontSize: number = 20;
    applyStyles() {
        let styles = {
            fontWeight: this.isBold ? 'bold' : 'normal',
            'fontSize.px': this.fontSize
        }
        return styles;
    };
    buttonClick():void {
        console.log('clicked');
    }
}