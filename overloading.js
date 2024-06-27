class A{
    add(...arg){
        console.log(arg);

        let sum= arg.reduce((n1,n2)=>n1+n2)
        console.log(sum);

    }
}

const obj= new A()

obj.add(1,2,3)

console.log('--------');

