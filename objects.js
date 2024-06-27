employee = {
     empid:1000,
    empname:'neel'
}


console.log(employee['empid']);
console.log(employee);

console.log(employee.empname);


employee['empname']='max'
console.log(employee);

employee['empdes']='engineer'
console.log(employee);


for(key in employee){
    console.log(key);
}

for(key in employee){
    console.log(employee[key]);
}

