



export class FileOne {

    username: string
    password: string

    constructor(user: string, pass: string) {
        this.username = user
        this.password = pass
    }


    enterUserName() {
        console.log(this.username)
    }


    enterPassword() {
        console.log(this.password)
    }




}


// export class FileThree {



//     userLogout() {
//         console.log('User logging out...')
//     }
// }