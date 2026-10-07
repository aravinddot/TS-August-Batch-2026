"use strict";
// OOP - Object Oriented Programming
// 1) class
// 2) constructor
// 3) this keyword
// 4) encapsulation
// 5) inheritance
// 6) polymorphism
// 7) abstraction
// 8) access modifiers
// 9) static members
//import & export
class HomePage {
    constructor() {
        this.value = 'Playwright';
    }
    print() {
        console.log('Hello, World!');
    }
    validate() {
        console.log('Validating...');
    }
}
const home = new HomePage();
home.print();
home.validate();
//# sourceMappingURL=class.js.map