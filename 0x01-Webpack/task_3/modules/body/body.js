import $ from 'jquery';
import _ from 'lodash';
import './body.css';

$('body').append('<p>Dashboard data for the students</p>');
$('body').append('<button>Click here to get started</button>');
$('body').append('<p id="count"></p>');

let counter = 0;

/**
 * It updates the state of the counter by incrementing it by one and then updating the text of the
 * `#count` element to reflect the new value
 */
const updateState = () => {
  counter++;
  $('#count').html(`${counter} clicks on the button`);
};

$('button').on('click', _.debounce(updateState, 500));
