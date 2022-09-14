/* The Director class implements the DirectorInterface and defines the workFromHome, getCoffeeBreak,
and workDirectorTasks methods. */
var Director = /** @class */ (function () {
  function Director() {
    this.workFromHome = function () {
      return 'Working from home';
    };
    this.getCoffeeBreak = function () {
      return 'Getting a coffee break';
    };
    this.workDirectorTasks = function () {
      return 'Getting to director tasks';
    };
  }
  return Director;
})();
/* The Teacher class implements the TeacherInterface, which means that it must implement all the
methods that are defined in the interface */
var Teacher = /** @class */ (function () {
  function Teacher() {
    this.workFromHome = function () {
      return 'cannot work from Some';
    };
    this.getCoffeeBreak = function () {
      return 'Cannot have a break';
    };
    this.workTeacherTasks = function () {
      return 'Getting to work';
    };
  }
  return Teacher;
})();
var newObject = new Teacher();
/**
 * If the salary is a number and less than 500, return a Teacher, otherwise return a Director.
 * @param {number | string} salary - number | string
 * @returns Director | Teacher
 */
var createEmployee = function (salary) {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
};
/**
 * If the employee is a Director, return true, otherwise return false.
 * @param {DirectorInterface | TeacherInterface} employee - DirectorInterface | TeacherInterface
 * @returns A boolean
 */
var isDirector = function (employee) {
  return employee instanceof Director;
};
/**
 * If the employee is a Director, then call workDirectorTasks, otherwise call workTeacherTasks.
 * @param {DirectorInterface | TeacherInterface} employee - DirectorInterface | TeacherInterface
 */
var executeWork = function (employee) {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  }
};
executeWork(createEmployee(200));
executeWork(createEmployee(1000));
/**
 * Teach class takes a subject and returns a string.
 * @param {Subjects} todayClass - Subjects
 * @returns A string
 */
var teachClass = function (todayClass) {
  if (todayClass === 'Math') return 'Teaching Math';
  else if (todayClass === 'History') return 'Teaching History';
};
teachClass('Math');
