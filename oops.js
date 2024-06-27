
class employee{
    //property
    empid
    empname
    emplplace

   constructor(id,name,place){
    this.empid=id
    this.empname=name
    this.emplplace=place
   }
   display(){
    console.log(`employee name is ${this.empname}`);
   }

}

const obj = new employee(1000,'neel','kochi')
obj.display()
