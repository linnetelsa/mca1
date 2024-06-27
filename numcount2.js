// Modify the given JavaScript program to count and print the occurrences of each number in a new list b = [15, 20, 15, 15, 10, 20, 30, 10, 10, 20]. What is the count of the number 15?


b = [15, 20, 15, 15, 10, 20, 30, 10, 10, 20]

count={}
for(w of b){
    if( w in count){
        count[w]+=1
    }
    else{
        count[w]=1
    }
}
console.log(count);
console.log(`count of 15 is ${count[15]}`);