/// <reference path="./Subjects.ts" />

namespace Subjects {
  interface Teacher {
    experienceTeachingReact?: number;
  }
  export class React {
    getRequirements = (): string =>
      'Here is the list of requirements for React';
    getAvailableTeacher = (): string => {
      const { firstName, experienceTeachingReact } = this.teacher;
      if (!experienceTeachingReact || experienceTeachingReact < 0)
        return 'No available teacher';
      return `Available Teacher: ${name}`;
    };
  }
}
