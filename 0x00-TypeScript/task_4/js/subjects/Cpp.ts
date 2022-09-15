/// <reference path="./Subjects.ts" />

namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }
  export class Cpp extends Subject {
    getRequirements = (): string => 'Here is the list of requirements for Cpp';
    getAvailableTeacher = (): string => {
      const { firstName, experienceTeachingC } = this.teacher;
      if (!experienceTeachingC || experienceTeachingC < 0)
        return 'No available teacher';
      return `Available Teacher: ${firstName}`;
    };
  }
}
