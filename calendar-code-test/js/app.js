$(() => {
console.log('JS loaded');

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
const hours = [12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const minutes = ['00', '15', '30', '45'];

// DOM elements
const $grid = $('.grid');
const $days = $('.days');
const $hours = $('.hours');
const $send = $('.send');
const $times = $('.times');
const $overlay = $('.overlay');
const $close = $('.close');
const selected = [];
let lis ='';

// Date
const today = new Date();
const day = today.getDay();
const week = days.slice(day, 7).concat(days.slice(0, day)); // Generate week array starting with today

// Append hours to the DOM & generate grid tiles with data attributes
hours.forEach((hour, index) => {
  const suffix = index < 12 ? 'am' : 'pm';
  $hours.append(`<li>${hours[index]}${suffix}</li>`);

  // Create 4 grid tiles for each hour
  let tiles = '';
  for (let i = 0; i < minutes.length; i++) {
    tiles += `<li data-time="${hour}:${minutes[i]}${suffix}"></li>`;
  }
  lis += tiles;
});

// Append days to the DOM
week.reverse().forEach((day) => {
  $days.prepend(`<li>${day}</li>`);
  $grid.prepend(`<li><ul class="day" data-day="${day}">${lis}</ul></li>`);
});

$grid.on('click', '.day li', addTime); // Event delegation to add event listeners to dynamically generated elements
$send.on('click', sendTimes);
$close.on('click', closeModal);

function sendTimes(e) {
  e.preventDefault();
  $overlay.show(); // Show the modal
  if (selected.length) {
    selected.forEach((time) => { // Append the selected times to the list in the modal
      $times.append(`<li>${time}</li>`);
    });
  } else {
    $times.append('<li>None</li>');
  }
}

function closeModal() {
  $times.empty();
  $overlay.hide();
}

function addTime() {
  const isSelected = $(this).hasClass('selected');
  const day = $(this).parent().data('day');
  const time = $(this).data('time');
  const next = $(this).next().data('time');
  const content = `${day}: ${time} - ${next}`;

  if (!isSelected) {
    $(this).append(`<span>${time} - ${next}</span>`); // Add selected time to grid
    $(this).addClass('selected');

    selected.push(content); // Add to selected array
  } else {
    $(this).empty().removeClass('selected'); // Remove selected time from grid

    const index = selected.indexOf(content);
    selected.splice(index, 1); // Remove from selected array
  }
}

});
