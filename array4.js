//[id, name, designation, location, salary, experience]

employee =[ 
    [1000,'Neel','developer','kochi',25000,3],
    [1001,'Max','tester','TVM',20000,2],
    [1002,'MAxwell','QA','kochi',35000,4],
    [1003,'Vyom','QA','kochi',45000,5],
    [1004,'Laisha','tester','TVM',55000,7],
    [1005,'Aahan','developer','TVM',15000,1],
    [1006,'Aahil','QA','kochi',20000,2],
    [1007,'Shayan','developer','kochi',30000,3],
    [1008,'Nihaan','developer','TVM',25000,3]
]

// print all employee name 
a=employee.map(item=>item[1])
console.log(a);

//print total numbers of employee
console.log(employee.length);
//print developer employee details
   a=employee.filter(item=>item[2]=='developer')
   console.log(a);
//print employee whose salary > 30000
   a=employee.filter(item=>item[4]>30000)
   console.log(a);

// print details of employee Laisha
    m=employee.filter(item=>item[1]=='Laisha').flat()
    console.log(m);
//arrange employee based on their salary in descending order
   a=employee.sort((n1,n2)=>n2[4]-n1[4])
   console.log(a);
//arrange employee based on their experience in ascending order
a=employee.sort((n1,n2)=>n1[4]-n2[4])
   console.log(a);
// print the employ name whose have the higest salary
a=employee.reduce((n1,n2)=>n1[4]>n2[4]?n1:n2)
console.log(a[1]);
