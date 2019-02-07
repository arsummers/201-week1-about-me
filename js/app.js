'use strict';

/*What js do I want to put here?
I will need if/else statements for the questions
    Will need to incorporate separate ones for y/n
    must use .toUpperCase() or .toLowerCase() to allow valid answers from users that yell
        look up how those work when you get to them
    log things to the console
*/

//pop up for question 1
var answer = prompt('Do I like mayonnaisse?');

//if yes/y
if (answer === 'yes') {
  alert('You are very wrong');

} else if (answer === 'y') {
  alert('wrong, but you saved time on typing');

//if no/n
} else if (answer === 'no') {
  alert('Correct! I hate it');

} else if (answer === 'n') {
  alert('you are right');

//other answers
} else {
  alert('please do not be like this');
}
console.log('answer to question 1: ' + answer);




//pop up from q2
answer = prompt('Was my first pet a cat?');

//if yes/y
if (answer === 'yes') {
  alert('you are wrong but cats are cool');

} else if (answer === 'y') {
  alert('Wrong, but I would like a cat');

//if no/n
} else if (answer === 'no') {
  alert('You are right I had a dog');

} else if (answer === 'n') {
  alert('the dog\'s name was short but still longer than your answer');

//other answers
} else {
  alert('why are you like this?');
}
console.log('answer to Q2: ' + answer);

//pop up from q3
answer = prompt(' Have I lived outside Washington?');

//if yes/y
if (answer === 'yes') {
  alert('Correct!');

} else if (answer === 'y') {
  alert('You are right');

//if no/n
} else if (answer === 'no') {
  alert('Wrong');

} else if (answer === 'n') {
  alert('Wrong, but I have been up here a few years');

//other answers
} else {
  alert('it\'s a simple question why didn\'t you answer it');
}
console.log('answer to Q3: ' + answer);

//pop up from q4
//prompt('Have I visited the moon?');
//put if elses here
//alert for yes
//alert for no
//alert for neither

//pop up from q5
//prompt('Do I think grizzly bears are neat?');
//put if elses here
//alert for yes
//alert for no
//alert for neither
