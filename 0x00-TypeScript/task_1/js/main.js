var teacher3 = {
    firstName: 'John',
    fullTimeEmployee: false,
    lastName: 'Doe',
    location: 'London',
    contract: false
};
console.log(teacher3);
var director1 = {
    firstName: 'John',
    lastName: 'Doe',
    location: 'London',
    fullTimeEmployee: true,
    numberOfReports: 17
};
console.log(director1);
var printTeacher = function (teacher) {
    return "".concat(teacher.firstName[0], ". ").concat(teacher.lastName, "}");
};
var StudentClass = /** @class */ (function () {
    function StudentClass(firstName, lastName) {
        var _this = this;
        this.displayName = function () { return _this.firstName; };
        this.workOnHomework = function () { return 'Currently working'; };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return StudentClass;
}());
