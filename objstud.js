class student{
    stID
    stName
    stCourse


    constructor(id,name,course){
        this.stID=id
        this.stName=name
        this.stCourse=course

    }

    display(){
        console.log(`list of students are ${this.stID},${this.stName},${this.stCourse}`);
    }
}
 const obj=new student(1,'miya','mearn')
 const N=new student(2,'miya','mearn')

 obj.display()
 N.display()