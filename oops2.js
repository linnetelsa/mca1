
class students{
    stid
    stname
    stcourse


    constructor(id,name,course){
        this.stid=id
        this.stname=name
        this.stcourse=course
    }
    display(){
        console.log(`student id is ${this.stid} name is ${this.stname} student course is ${this.stcourse}`);
    }
}

const obj =new students(1,'meera','python')
const obj1 =new students(2,'rahul','python')

obj.display()
 obj1.display()