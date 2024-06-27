a=[20,50,60,12,25,50,30,30,30,12,25,60]

count={}
for(w of a){
    if( w in count){
        count[w]+=1
    }
    else{
        count[w]=1
    }
}
console.log(count);