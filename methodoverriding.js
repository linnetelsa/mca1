class a{
    methoda(){
        console.log('inside a');
    }
    methoda(){
        console.log('inside b');
    }
    methoda(){
        console.log('inside c');
    }
}

const obj=new a()
obj.methoda()