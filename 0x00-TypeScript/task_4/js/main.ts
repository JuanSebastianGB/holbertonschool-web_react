/// <reference path="./subjects/Java.ts" />
/// <reference path="./subjects/Cpp.ts" />
/// <reference path="./subjects/Teacher.ts" />
/// <reference path="./subjects/Subject.ts" />
/// <reference path="./subjects/React.ts" />

const cpp: Subjects.Cpp = new Subjects.Cpp();
const react: Subjects.React = new Subjects.React();
const java: Subjects.Java = new Subjects.Java();

const cTeacher: Teacher = {
  experienceTeachingC: 10,
  firstName: 'Sebastian',
  lastName: 'Gonzalez',
};

console.log('C++');
cpp.setTeacher = cTeacher;
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());

export { cpp, java, react, cTeacher };
