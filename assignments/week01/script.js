// 1- What's the Sum Of All Numbers? REDUCE
function sumOf(){
  // Converts input into a string.
  let inputString = ($('#sumOf-input').val());
  // Converts that string into an array by splitting the comma.
  let inputArray = inputString.split(',');
 // reduce returns the sum of all numbers to var results.
  let results = inputArray.reduce(function(sum, value){
     // parseInt converts strings into numbers.
    return (parseInt(sum) + parseInt(value));
  });
  // displays the sum of all numbers.
  $("#sumOf-result").text(`${results}`);
};

// calls function when button is pressed
$('#sumOf-button').click(function(event) {
  sumOf();
});



// 2- What's Their Value When Divided By 100? FOREACH
function divide(){
  // Converts input into a string.
  let inputString = ($('#divide-input').val());
  // Converts that string into an array by splitting the comma.
  let inputArray = inputString.split(',');
 // forEach divides the numbers by 100 and appends it to the list right away.
   inputArray.forEach(function(value, key){
       $("#divide-result").append(`<li>${parseInt(value)/100}</li>`);
    });
};
// calls function when button is pressed
$('#divide-button').click(function(event) {
  // clears previous list
  $("#divide-result").text(' ');
  divide();
});



// 3- Are All Numbers Odd? FILTER/EVERY
function oddNumbers(){
  // Converts input into a string.
  let inputString = ($('#oddNumbers-input').val());
  // Converts that string into an array by splitting the comma.
  let inputArray = inputString.split(',');
  // Checks if all numbers are odd if so returns true.
  let result = inputArray.every(function(value){
    return value % 2;
  });
  // filters all the even numbers out by dividing by two and checking the reminder.
  let notOdd = inputArray.filter(function(value){
    return value%2 == 0;
  });
  // If filter returns true display this message.
  if (result === true){
    $("#oddNumbers-result").text("Yes, all numbers are odd!")
  // Else display this message and all numbers that are not odd.
  } else {
    $("#oddNumbers-result").text(`Not all numbers are odd. The follwing numbers are even: ${notOdd}`)
  }
};
// calls function when button is pressed.
$('#oddNumbers-button').click(function(event) {
  oddNumbers();
});



// 4- What's The Square Root? MAP
function squareRoot(){
  // Converts input into a string.
  let inputString = ($('#squareRoot-input').val());
  // Converts that string into an array by splitting the comma.
  let inputArray = inputString.split(',');
  // Creates a new array called squared from inputArray with map.
  let squared = inputArray.map(function(value, key){
  // parseInt converts strings into numbers.
  // Math.sqrt calculates square root of the numbers.
  // returns squared roots to array created.
    return (Math.sqrt(parseInt(value)));
   });
  // Displays the squared roots separated by comma (dont know how to get rid of last comma).
   $("#squareRoot-result").text(`${squared}, `);
};
// calls function when button is pressed.
$('#squareRoot-button').click(function(event) {
  squareRoot();
});
