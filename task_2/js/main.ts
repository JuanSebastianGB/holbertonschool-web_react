interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

/* The Director class implements the DirectorInterface and defines the workFromHome, getCoffeeBreak,
and workDirectorTasks methods. */
class Director implements DirectorInterface {
  public workFromHome = (): string => 'Working from home';
  public getCoffeeBreak = (): string => 'Getting a coffee break';
  public workDirectorTasks = (): string => 'Getting to director tasks';
}

/* The Teacher class implements the TeacherInterface, which means that it must implement all the
methods that are defined in the interface */
class Teacher implements TeacherInterface {
  public workFromHome = (): string => 'cannot work from Some';
  public getCoffeeBreak = (): string => 'Cannot have a break';
  public workDirectorTasks = (): string => 'Getting to work';
}

/**
 * If the salary is a number and less than 500, return a Teacher, otherwise return a Director.
 * @param {number | string} salary - number | string
 * @returns Director | Teacher
 */
const createEmployee = (salary: number | string): Director | Teacher => {
  if (typeof salary === 'number' && salary < 500) return new Teacher();
  return new Director();
};
