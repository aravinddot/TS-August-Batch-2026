"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fileOne_1 = require("./fileOne");
class FileTwo extends fileOne_1.FileOne {
    constructor(user, pass) {
        super(user, pass);
        this.login = 'User logging in...';
    }
    userLoginIn() {
        this.enterUserName();
        this.enterPassword();
        console.log(this.login);
    }
}
const files = new FileTwo('Admin', 'password123');
files.userLoginIn();
//# sourceMappingURL=fileTwo.js.map