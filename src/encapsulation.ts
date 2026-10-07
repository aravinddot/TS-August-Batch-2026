




class Encap {


    private valueOne: string // inside class
    protected valueTwo: string // inside class + child classes
    readonly valueThree: string // cannot be modified


    constructor() {
        this.valueOne = 'playwright'
        this.valueTwo = 'cypress'
        this.valueThree = 'selenium'
    }



    private validate() {
        console.log(this.valueOne)
    }





}




class ChildEncap extends Encap {



    validateChild() {
        console.log(this.valueTwo)
    }


}