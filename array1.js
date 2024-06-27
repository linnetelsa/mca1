arr=[10,11,12,3,2,4]

searchitem=2
ispresent=false
for(let num of arr){
    if(num==2){
       ispresent=true
        break;
    }
    
}
console.log(ispresent?'present':'not present');
console.log('-----');

arr=[4,5,6]
//op=[11,10,9]

temp=[]
sum=0
for(num of arr){
sum=sum+num
}
for(num of arr){
    temp.push(sum-num)
}
console.log(temp);
console.log('--------');

a=[10,20,30,20,30,40,50,60,10]
b=[]
for(i=0;i<a.length;i++){
    for(j=i+1;j<a.length;j++){
        if(a[i]==a[j]){
            b.push(a[i])
        }
    }
}
console.log(b);


   