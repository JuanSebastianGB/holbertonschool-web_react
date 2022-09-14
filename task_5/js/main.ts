/* Defining an interface called MajorCredits. */
export interface MajorCredits {
  credits: number;
  brand: void;
}
/* Defining an interface called MinorCredits. */
export interface MinorCredits {
  credits: number;
  brand: void;
}

/**
 * This function returns the value of the majorCredits property of the object that called it
 * @returns The majorCredits object.
 */
const sumMajorCredits = (
  subject1: MajorCredits,
  subject2: MajorCredits
): majorCredits => {
  const sum = subject1.credits + subject2.credits;
  return { sum } as MajorCredits;
};

/**
 * It takes two MinorCredits objects and returns a MinorCredits object.
 * @param {MinorCredits} subject1 - MinorCredits
 * @param {MinorCredits} subject2 - MinorCredits
 * @returns An object with a property called sum.
 */
const sumMinorCredits = (
  subject1: MinorCredits,
  subject2: MinorCredits
): number => {
  const sum = subject1.credits + subject2.credits;
  return { sum } as MinorCredits;
};
