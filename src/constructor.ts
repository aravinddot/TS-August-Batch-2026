



class LoginPage {

    userNameValue: string
    passwordValue: string

    constructor(user: string, pass: string) {
        this.userNameValue = user
        this.passwordValue = pass
    }

    userName() {
        console.log(this.userNameValue)
    }


    password() {
        console.log(this.passwordValue)
    }


    login() {
        this.userName()
        this.password()
        console.log('Logged in')
    }


}


const login = new LoginPage('Admin', 'Test@123')


login.login()
