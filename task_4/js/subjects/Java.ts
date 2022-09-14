/// <reference path="./Subjects.ts" />

namespace Subjects {
  interface Teacher {
    experienceTeachingJava?: number;
  }
  export class React {
    getRequirements = (): string => 'Here is the list of requirements for Java';
    getAvailableTeacher = (): string => {
      const { firstName, experienceTeachingJava } = this.teacher;
      if (!experienceTeachingJava || experienceTeachingJava < 0)
        return 'No available teacher';
      return `Available Teacher: ${name}`;
    };
  }
}
