num=153
temp=num
sum=0
while(num>0){
    lastdigit=num%10
    sum=sum+(lastdigit**3)
    num=Math.floor(num/10)
}
if(temp==sum){
    console.log('amstrong');
}
else{
    console.log('not amstrong');
}

console.log('----');
//forloop

num=5
fact=1
for(i=1;i<=5;i++){
    fact=fact*i

}
console.log(fact);
console.log('----');

for(i=1;i<=10;i++){
    if(i>5){
        break
    }
    console.log(i);
}
