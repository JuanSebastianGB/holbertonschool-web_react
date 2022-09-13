interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
    firstName: 'Juan',
    lastName: 'Gonzalez',
    age: 31,
    location: 'Cali',
  },
  student2: Student = {
    firstName: 'Aura',
    lastName: 'Caicedo',
    age: 31,
    location: 'Cali',
  };
const studentsList: Array<Student> = [student1, student2];

const $table: HTMLTableElement = document.createElement('table');
const $tbody: HTMLTableSectionElement = document.createElement('tbody');
const $thead: HTMLTableSectionElement = document.createElement('thead');

$table.appendChild($thead);
$table.appendChild($tbody);

const titles: string[] = ['firstName', 'location'];

const $th = document.createElement('th');
titles.forEach((title) => {
  const $td = document.createElement('td');
  const $text = document.createTextNode(title);
  $td.appendChild($text);
  $th.appendChild($td);
});
$thead.appendChild($th);

studentsList.forEach((student) => {
  let $tr = $tbody.insertRow();
  for (let [key, value] of Object.entries(student)) {
    if (key === 'firstName' || key === 'location') {
      const $td = $tr.insertCell();
      const $text = document.createTextNode(value);
      $td.appendChild($text);
    }
  }
});

document.body.append($table);
