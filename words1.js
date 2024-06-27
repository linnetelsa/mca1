text='hai hello all hello world all'

words=text.split(" ")
console.log(words);
obj={}
for(word of words){
    if(word in obj){
        obj[word]+=1
    }
    else{
        obj[word]=1
    }
}
console.log(obj);