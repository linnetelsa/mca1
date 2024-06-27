class s {
    adda(...arg){
        console.log(arg);

        let sum = arg.reduce((a,b)=>a+b)
        console.log(sum );
    }
}
const obj = new s()
obj.adda(1,2)