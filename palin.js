num=121
str=''
temp=num
while(num>0){
    lastdigit=num%10
    str=str+lastdigit
    num=Math.floor(num/10)
}
if(temp==str){
    console.log('palindrome');
}
else{
    console.log('not palindrome');
}