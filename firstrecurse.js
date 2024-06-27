
//
pattern='acbdbcdbcd'

obj={}
a=pattern.split("")
for(j of a){
    if(j in obj ){
        console.log(`first recurse is`,j );
        break
    }
    else{
        obj[j]=1
    }
}
