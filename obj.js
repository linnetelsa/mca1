a=[20,50,60,12,25,50,30,30,30,12,25,60]

obj={}

for(num of a){
    if(num in obj){ 
        obj[num]+=1
    }
    else{
        obj[num]=1
    }
    
       

}
console.log(obj);
console.log('----');

// write a profram to print first recursive
 pattern='acbdbcdbcd'

 b={}
 for(item of pattern){
    if(item in b){
       console.log('first recursive is',item );
       break
    }
    else{
        b[item]=1
    }
 }

 console.log('----');



 
 weatherdata=[ 
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}

  wd={}
  for(data of weatherdata){
    district=data.district
     curweather=data.weather
    
     if(district in wd){
        oldweather=wd[district]

        if(oldweather>curweather){
            wd[district]=oldweather
        }
        else{
            wd[district]=curweather
        }

     }


     else{
        wd[district]=curweather
     }


  }

  console.log(wd);

  //lowest

  wd={}
  for(data of weatherdata){
    district=data.district
     curweather=data.weather
    
     if(district in wd){
        oldweather=wd[district]

        if(oldweather>curweather){
            wd[district]=curweather
        }
        else{
            wd[district]= oldweather
        }

     }


     else{
        wd[district]=curweather
     }


  }

  console.log(wd);

   

