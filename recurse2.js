 c= 'xyzxyzyz'

obj={}
j=c.split("")
for(v of j){
    if(v in obj){
        console.log(`first recurse is`,v);
        break
    }
    else{
        obj[v]=1
    }
}