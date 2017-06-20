$(() => {
  const $container = $('#timesTableGrid');
  const numbers = [1,2,3,4,5,6,7,8,9,10,11,12];
  numbers.forEach((row) => {
    const $row = $('<div class="row"></div>');
    numbers.forEach((column) => {
      $row.append( `<div class="col-1">${row} X ${column} = ${row * column}</div>`);
    });
    $container.append($row);
  });
});

// for each number we're going to create one row
//
// for each row we're going to create 12 column
