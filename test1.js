constcars=[
    {
    id:1,make: "Toyota"
    ,model: "Camry"
    ,price:24425,inStock:'yes'
    ,features:{
    engine: "2.5L4-cylinder"
    ,horsepower:203,}
    },
    {
    id:2,make: "Ford"
    ,model: "Mustang"
    ,price:27470,inStock: 'No'
    ,features:{
    engine: "2.3Lturbo4-cylinder"
    ,horsepower:310}
    },
    {
    id:3,make: "Chevrolet"
    ,model: "Tahoe"
    ,price:49900,inStock: 'yes'
    ,features:{
    engine: "5.3LV8"
    ,horsepower:355,}

},
{
id:4,make:"Tesla"
,model: "Model3"
,price:39990,inStock: 'yes'
,features:{
engine: "Electric"
,horsepower:283}
},
{
    id:5,make: "BMW"
    ,model: "3Series"
    ,price:41450,inStock: 'No'
    ,features:{
    engine: "2.0Lturbo4-cylinder"
    ,horsepower:255}
    },
    ];

    //print all car name

     constcars.forEach(item=> console.log(item.make ))
     
    

//printallcarmodelwhosepriceisgreaterthan30000

constcars.filter(car => car.price > 30000).forEach(item=>console.log(item.model ));
console.log('------');
//printoutof stockcars

 constcars.filter(car => car.inStock=='No').forEach(item=> console.log(item.model));

