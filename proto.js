balano = {
    manufacturer:'maruthi',
    model:'hatchback',
    varient:['automatic', 'manuel']
}
glanza={
    manufacturer:'toyota'
}
glanza.__proto__=balano
console.log(glanza.manufacturer);
console.log(glanza.varient);