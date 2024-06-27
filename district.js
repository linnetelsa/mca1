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
for( data of weatherdata){
  district=data.district
 currtemp=data.weather

   if(district in wd){
    oldtemp=wd[district]
    if(oldtemp>currtemp){
      wd[district]=oldtemp
    }
    else{
        wd[district]=currtemp
    }
}

   else{
    wd[district]=currtemp
   }
}
console.log(wd);
console.log('-----');

//lowest tempreture
wd={}
for(view of weatherdata){
   district=view.district
    temp= view.weather
    if(district in wd){
       oldtemp=wd[district]
       if(oldtemp>temp){
        wd[district]= temp
       }
       else{
        wd[district]= oldtemp
        
       }
    }
    else{
        wd[district]=oldtemp
    }

}

       

console.log(wd);