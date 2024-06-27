arr=[10,11,12,3,2,4]

searchitem=9
ispresent=false
for(y of arr){
    if(y==searchitem){
    
       ispresent=true
       
        break

    }

       
    }

    console.log(ispresent?'present':'not present');