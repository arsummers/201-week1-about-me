'use strict';

//declaring variable to use in answer field rather than strings
var answerYes = 'yes';
var answerY = 'y';
var answerNo = 'no';
var answerN = 'n';



/* START OF QUESTION 1*/

//pop up for question 1
var answer = prompt('Do I like mayonnaisse?');

//if yes/y
if (answer.toLowerCase() === answerYes) {
  alert('You are very wrong');

} else if (answer.toLowerCase() === answerY) {
  alert('wrong, but you saved time on typing');

//if no/n
} else if (answer.toLowerCase() === answerNo) {
  alert('Correct! I hate it');

} else if (answer.toLowerCase() === answerN) {
  alert('you are right');

//other answers
} else {
  alert('please do not be like this');
}
console.log('answer to question 1: ' + answer);


/*START OF QUESTION 2*/

//pop up from q2
answer = prompt('Was my first pet a cat?');

//if yes/y
if (answer.toLowerCase() === answerYes) {
  alert('you are wrong but cats are cool');

} else if (answer.toLowerCase() === answerY) {
  alert('Wrong, but I would like a cat');

//if no/n
} else if (answer.toLowerCase() === answerNo) {
  alert('You are right I had a dog');

} else if (answer.toLowerCase() === answerN) {
  alert('the dog\'s name was short but still longer than your answer');

//other answers
} else {
  alert('why are you like this?');
}
console.log('answer to Q2: ' + answer);


/*START OF QUESTION 3*/

//pop up from q3
answer = prompt(' Have I lived outside Washington?');

//if yes/y
if (answer.toLowerCase() === answerYes) {
  alert('Correct!');

} else if (answer.toLowerCase() === answerY) {
  alert('You are right');

//if no/n
} else if (answer.toLowerCase() === answerNo) {
  alert('Wrong');

} else if (answer.toLowerCase() === answerN) {
  alert('Wrong, but I have been up here a few years');

//other answers
} else {
  alert('it\'s a simple question why didn\'t you answer it');
}
console.log('answer to Q3: ' + answer);


/*START OF QUESTION 4*/

//pop up from q4
answer = prompt(' Have I visited the moon?');

//if yes/y
if (answer.toLowerCase() === answerYes) {
  alert('Wrong');

} else if (answer.toLowerCase() === answerY) {
  alert('Nope, but lots of respect for those who have');

//if no/n
} else if (answer.toLocaleLowerCase() === answerNo) {
  alert('You are right');

} else if (answer.toLowerCase() === answerN) {
  alert('Correct, I have no visited the moon');

//other answers
} else {
  alert('how dare you disrespect the space lesbian like this');
}
console.log('answer to Q4: ' + answer);


/*START OF QUESTION 5*/

//pop up from q5
answer = prompt(' Do I think grizzly bears are neat?');

//if yes/y
if (answer.toLowerCase() === answerYes) {
  alert('Correct. They are interesting animals');

} else if (answer.toLowerCase() === answerY) {
  alert('They could eat me, but I still think they\'re cool');

//if no/n
} else if (answer.toLowerCase() === answerNo) {
  alert('You are wrong but don\'t feel bad');

} else if (answer.toLowerCase() === answerN) {
  alert('Wrooong. Restart from the top and try again');

//other answers
} else {
  alert('are you actually a bear? is that why you can\'t answer my question?');
}
console.log('answer to Q5: ' + answer);
