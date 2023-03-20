// Way 1 - using <> brackets
// Way2 - using 'as' keyword
let empId: any = 465564;
let numberValue = <number>empId;

numberValue = empId as any;


interface StudentType {
    name: string,
    code: number
}

let student = <StudentType> {};
student.name = "Sai Krishna";
student.code = 123;