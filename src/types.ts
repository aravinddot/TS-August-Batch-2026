

type arrOneType = [string, number, boolean, string, number, boolean, undefined]


const arrOne: arrOneType = ['playwright', 6, true, 'cypress', 9, false, undefined]


type objType = {
    readonly name: string,
    version: number,
    isActive?: boolean
}

const obj: objType  = {
    name: 'playwright',
    version: 1.0

}



// union type


type status = 'ac123tive' | 'inactive' | 'pending'


const currentStatus: status = 'ac123tive'



// intersection type


type one = {name: string}

type two = {age: number}

type three = one & two



const objTwo: three = {
    name: 'playwright',
    age: 6
}









