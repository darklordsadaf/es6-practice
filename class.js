class Student{
    constructor(sId, sName){
        this.id = sId;
        this.name = sName;
        this.country = "America";
    }
}

const student1 = new Student(10, "Dom");
const student2 = new Student(12, "Paul");

console.log(student1.name, student2.name);