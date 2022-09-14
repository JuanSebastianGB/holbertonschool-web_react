/* The Director class implements the DirectorInterface and defines the workFromHome, getCoffeeBreak,
and workDirectorTasks methods. */
var Director = /** @class */ (function () {
    function Director() {
        this.workFromHome = function () { return 'Working from home'; };
        this.getCoffeeBreak = function () { return 'Getting a coffee break'; };
        this.workDirectorTasks = function () { return 'Getting to director tasks'; };
    }
    return Director;
}());
/* The Teacher class implements the TeacherInterface, which means that it must implement all the
methods that are defined in the interface */
var Teacher = /** @class */ (function () {
    function Teacher() {
        this.workFromHome = function () { return 'cannot work from Some'; };
        this.getCoffeeBreak = function () { return 'Cannot have a break'; };
        this.workDirectorTasks = function () { return 'Getting to work'; };
    }
    return Teacher;
}());
var createEmployee = function (salary) {
    if (typeof salary === 'number' && salary < 500)
        return new Teacher();
    return new Director();
};
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));
