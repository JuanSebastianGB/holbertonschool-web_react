import $ from 'jquery';
import _ from 'lodash';

let count = 0;

/* A function that increments the count variable by 1. */
const updateCounter = () => (count += 1);

/* A function that is called when the button is clicked. */
const updateState = _.debounce(() => {
  $('#count').text(`${updateCounter()} clicks on the button`);
});

$(() => {
  $('body').append('<p>Holberton Dashboard</p>');
  $('body').append('<p>Dashboard data for the students</p>');
  $('body').append('<button>Click here to get started</button>');
  $('body').append('<p id="count">Dashboard data for the students</p>');
  $('body').append('<p>Copyright - Holberton School</p>');

  $('button').on('click', () => updateState());
});
