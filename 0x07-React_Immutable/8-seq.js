import { Seq } from 'immutable';

const upperCaseFirstLetter = (data) =>
  `${data[0].toUpperCase()}${data.slice(1)}`;

const printBestStudents = (grades) => {
  const filteredPerson = Seq(grades)
    .filter((person) => person.score >= 70)
    .map((person) => {
      const { firstName, lastName } = person;
      return {
        ...person,
        firstName: upperCaseFirstLetter(firstName),
        lastName: upperCaseFirstLetter(lastName),
      };
    })
    .toObject();
  console.log(filteredPerson);
  return filteredPerson;
};

export default printBestStudents;
