p=[10,11,12,20,30]
q=[11,20,25,30,33]

for(i of p){
    for(j of q){
        if(i==j){
            console.log(i);
            break
        }
    }
}