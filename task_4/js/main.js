"use strict";
exports.__esModule = true;
exports.react = exports.java = exports.cpp = void 0;
var cpp = new Subjects.Cpp();
exports.cpp = cpp;
var react = new Subjects.React();
exports.react = react;
var java = new Subjects.Java();
exports.java = java;
var cTeacher = {
    experienceTeachingC: 10,
    firstName: 'Sebastian',
    lastName: 'Gonzalez'
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
