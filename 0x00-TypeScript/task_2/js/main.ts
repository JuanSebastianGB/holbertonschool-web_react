interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

/* The Director class implements the DirectorInterface and defines the workFromHome, getCoffeeBreak,
and workDirectorTasks methods. */
class Director implements DirectorInterface {
  workFromHome = (): string => 'Working from home';
  getCoffeeBreak = (): string => 'Getting a coffee break';
  workDirectorTasks = (): string => 'Getting to director tasks';
}

/* The Teacher class implements the TeacherInterface, which means that it must implement all the
methods that are defined in the interface */
class Teacher implements TeacherInterface {
  workFromHome = (): string => 'cannot work from Some';
  getCoffeeBreak = (): string => 'Cannot have a break';
  workTeacherTasks = (): string => 'Getting to work';
}

const newObject = new Teacher();

/**
 * If the salary is a number and less than 500, return a Teacher, otherwise return a Director.
 * @param {number | string} salary - number | string
 * @returns Director | Teacher
 */
const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
};

/**
 * If the employee is a Director, return true, otherwise return false.
 * @param {DirectorInterface | TeacherInterface} employee - DirectorInterface | TeacherInterface
 * @returns A boolean
 */
const isDirector = (
  employee: DirectorInterface | TeacherInterface
): boolean => {
  return employee instanceof Director;
};

/**
 * If the employee is a Director, then call workDirectorTasks, otherwise call workTeacherTasks.
 * @param {DirectorInterface | TeacherInterface} employee - DirectorInterface | TeacherInterface
 */
const executeWork = (
  employee: DirectorInterface | TeacherInterface
): string => {
  if (employee instanceof Director) {
    return employee.workDirectorTasks();
  } else if (employee instanceof Teacher) {
    return employee.workTeacherTasks();
  }
};

executeWork(createEmployee(200));
executeWork(createEmployee(1000));

type Subjects = 'Math' | 'History';

/**
 * Teach class takes a subject and returns a string.
 * @param {Subjects} todayClass - Subjects
 * @returns A string
 */
const teachClass = (todayClass: Subjects): string => {
  if (todayClass === 'Math') return 'Teaching Math';
  else if (todayClass === 'History') return 'Teaching History';
};

teachClass('Math');
