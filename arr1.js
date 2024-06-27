expense=[12000,50000,1600,25000,55000,60000,1000,10000]

//highest
highest=expense[0]
for(  exp of expense){
    if(highest<exp){
        highest=exp
    }
}
console.log(highest);

//lowest

lowest=expense[0]
for(y of expense){
    if(lowest>y){ 
        lowest=y
}}
console.log(lowest);

//total
sum=0
for(y of expense){
    sum=sum+y
}
console.log(sum);