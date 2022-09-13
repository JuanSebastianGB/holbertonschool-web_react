interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [propName: string]: any;
}

const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};

console.log(teacher3);

interface Directors extends Teacher {
  numberOfReports: number;
}

const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log(director1);

interface TeacherToPrint{
  firstName: string;
  lastName: string;
}

const printTeacher = (teacher: TeacherToPrint): string => {
  `${firstName[0]. ${lastName}}`;
};

interface StudentClass{
  firstName: string;
  lastName: string;
}

class StudentClass{
  firstName: string;
  lastName: string;
  constructor(firstName: string, lastName: string){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  public displayName = () => this.firstName;

  public workOnHomework= ()=> 'Currently working';

}