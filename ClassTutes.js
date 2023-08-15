
class School{
    students;
    teachers;
    constructor(n){
    this.students=n;
    }

    getStudents(){
        return this.students;
    }
    setTeachers(n){
         this.teachers=n;
    }
    getTeachers(n){
        return this.teachers;
    }
    studentsPerTeacher(){
        if(this.students && this.teachers){
            return this.students/this.teachers;
        }
    }
    static schoolSlogan(){
        return 'Bashudhew Kutumbakam';
    }
}

let bvm =new School(101); // instatiate; // instance ->object
bvm.setTechers(10);
console.log(bvm.studentsPerTeacher());


console.log(School.schoolSlogan());

