"use strict";
class Encap {
    constructor() {
        this.valueOne = 'playwright';
        this.valueTwo = 'cypress';
        this.valueThree = 'selenium';
    }
    validate() {
        console.log(this.valueOne);
    }
}
class ChildEncap extends Encap {
    validateChild() {
        console.log(this.valueTwo);
    }
}
//# sourceMappingURL=encapsulation.js.map