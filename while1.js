i=1
while(i<=50){
    if(i%2!==0){
        console.log(i);
    }
    i++
}

console.log('-------');

i=1
sum=0
while(i<=10){
    sum=sum+i
    i++
}
console.log(sum)

console.log('------');

input=4
str=''
i=1
while(i<=input){
    str=str+i
    i++
}
product=input*str
console.log(product);
console.log('-----');

num=123
str=''
while(num>0){
    lastdigit=num%10
    str=str+lastdigit
    num=Math.floor(num/10)
}
console.log(str);