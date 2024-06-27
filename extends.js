class A{
    methoda(){
        console.log('inside a');
    }
}
class B extends A{
    methodb(){
        console.log('inside b');
    }
}

const obj = new B()
 
obj.methodb()
obj.methoda()