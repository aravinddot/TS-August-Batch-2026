



abstract class AbstractPage {



    print() {
        console.log('Printing page content')
    }




}


// const a = new AbstractPage()



class PageTwo extends AbstractPage {



    validate() {
        this.print()
    }

}


const two = new PageTwo()

two.print()