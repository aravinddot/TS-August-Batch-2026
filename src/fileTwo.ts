
import { FileOne } from './fileOne'





class FileTwo extends FileOne {

    login: string

    constructor(user: string, pass: string) {
        super(user, pass)
        this.login = 'User logging in...'

    }




    userLoginIn() {
        this.enterUserName()
        this.enterPassword()
        console.log(this.login)
    }




}



const files = new FileTwo('Admin', 'password123') 

files.userLoginIn()