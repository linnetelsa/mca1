var car = {
   Name:'maruthi',
   manufacturer:'baleno',
  model:'hatchback',
  price:'10lakhs'


}
//display car and manufacturer name 
console.log(`car name is ${car.Name} and manufacturer name is ${car.manufacturer}`);

console.log('model'in car? `model is ${car.model}`:'no model');

car['varient']=['manuel']
console.log(car);

car.varient.push('automatic')
console.log(car);