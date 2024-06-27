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
    //print all carname
    constcars.forEach(car => console.log(car.make));
    console.log('--------');
    //print all carmodel whose price is greater than 30000
    console.log('--------');
    constcars.filter(car => car.price > 30000).forEach(car => console.log(car.model));
    //print outof stockcars
    console.log('------');
    constcars.filter(car => car.inStock.toLowerCase() === 'no').forEach(car => console.log(car.make));
    //find the car name whose horse Power greaterthan300
    console.log('-------');
    constcars.filter(car => car.features.horsepower > 300).forEach(car => console.log(car.make));
   // what will be the revenue generated when all thea vailable cars are soldout
   const totalRevenue = constcars
    .filter(car => car.inStock.toLowerCase() === 'yes')
    .reduce((sum, car) => sum + car.price, 0);

console.log(`Total revenue generated: $${totalRevenue}`);