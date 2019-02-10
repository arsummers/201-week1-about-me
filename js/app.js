'use strict';

//Question 1: y/n.

//keeps track of right guesses
var counter = 0;

//keeps track of wrong guesses
var wrongGuessNumber = 0;

function questionOne() {
  var answerYes = ['yes', 'y'];
  var answerNo = ['no', 'n'];

  var questionOneGuesses = 2;
  var questionOneInput = prompt('Have I ever willingly consumed mayonnaise?');
  for (var i = 0; i < questionOneGuesses; i++) {
    if (answerNo[0] === questionOneInput.toLowerCase()) {
      console.log(questionOneInput + ' was right');
      alert('You are right. I hate mayo');
      counter ++;
      console.log('score: ' + counter);
      break;
    } else if (answerNo[1] === questionOneInput.toLowerCase()) {
      console.log(questionOneInput + ' was right');
      alert('You are right. I hate mayo');
      counter++;
      console.log('score: '+ counter);
      break;
    } else if (answerYes[0] === questionOneInput.toLowerCase()) {
      console.log(questionOneInput + ' was wrong');
      alert('That was wrong. Mayo is vile.');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      break;
    } else if (answerYes[1] === questionOneInput.toLowerCase()) {
      console.log(questionOneInput + ' was wrong');
      alert('That was wrong. Mayo is vile.');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      break;
    } else if (i === 1) {
      console.log(questionOneInput + ' was an invalid answer');
      alert(questionOneInput + ' was not a valid answer. Too bad you only had one shot at it');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
    }
  }
}
//calls question 1
questionOne();

//Question 2, yes/no
function questionTwo(){
  var answerYes = ['yes', 'y'];
  var answerNo = ['no', 'n'];
  var questionTwoGuesses = 2;
  var questionTwoInput = prompt('Have I ever owned dogs?');
  for (var a = 0; a < questionTwoGuesses; a++) {
    if (answerYes[0] === questionTwoInput.toLowerCase()) {
      console.log(questionTwoInput + ' was right');
      alert('You are right! I got a black lab puppy from the pound, and named him Pups because I was six at the time.');
      counter++;
      console.log('score: ' + counter);
      break;
    } else if (answerYes[1] === questionTwoInput.toLowerCase()) {
      console.log(questionTwoInput + ' was right');
      alert('You are right!  I got a black lab puppy from the pound, and named him Pups because I was six at the time.');
      counter++;
      console.log('score: ' + counter);
      break;
    } else if (answerNo[0] === questionTwoInput.toLowerCase()) {
      console.log(questionTwoInput + ' was wrong');
      alert('You are wrong. My first pet was a sweet rescue puppy, but you don\'t get to know his name because you gave the wrong answer');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      break;
    } else if (answerNo[1] === questionTwoInput.toLowerCase()) {
      console.log(questionTwoInput + ' was wrong');
      alert('You are wrong. My first pet was a sweet rescue puppy, but you don\'t get to know his name because you gave the wrong answer');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      break;
    } else if (a === 1) {
      console.log(questionTwoInput + ' was invalid');
      alert(questionTwoInput + ' wasn\'t a valid answer at all. My first pet was a dog, but you need to give better answers');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
    }
  }
}
//calls question2
questionTwo();


//Question 3, yes/no

function questionThree() {
  var answerYes = ['yes', 'y'];
  var answerNo = ['no', 'n'];

  var questionThreeGuesses = 2;
  var questionThreeInput = prompt('Did I watch the recent lunar eclipse?');
  for (var b = 0; b < questionThreeGuesses; b++) {
    if (answerNo[0] === questionThreeInput.toLowerCase()) {
      console.log(questionThreeInput + 'was was wrong');
      alert('You\'re wrong. I was lucky enough to watch it');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      break;
    } else if (answerNo[1] === questionThreeInput.toLowerCase()) {
      console.log(questionThreeInput + 'was wrong');
      alert('You\'re wrong. I was lucky enough to watch it');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      break;
    } else if (answerYes[0] === questionThreeInput.toLowerCase()) {
      console.log(questionThreeInput + ' was right');
      alert('You are right! The night was even clear enough for it');
      counter++;
      console.log('score: ' + counter);
      break;
    } else if (answerYes[1] === questionThreeInput.toLowerCase()) {
      console.log(questionThreeInput + ' was right');
      alert('You are right! The night was even clear enough for it');
      counter++;
      console.log('score: ' + counter);
      break;
    } else if (b === 1) {
      console.log(questionThreeInput + ' was an invalid answer');
      alert(questionThreeInput + ' was not a valid answer. Pretty rude of you to give a bad answer. The moon deserves better.');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
    }
  }
}
// calls question 3
questionThree();

//Question 4, yes/no
function questionFour() {
  var answerYes = ['yes', 'y'];
  var answerNo = ['no', 'n'];

  var questionFourGuesses = 2;
  var questionFourInput = prompt('BEARS??? yes or no.');
  for (var c = 0; c < questionFourGuesses; c++) {
    if (answerNo[0] === questionFourInput.toLowerCase()) {
      console.log(questionFourInput + ' was wrong');
      alert('That was not nice to BEARS???');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      break;
    } else if (answerNo[1] === questionFourInput.toLowerCase()) {
      console.log(questionFourInput + ' was wrong');
      alert('That was not nice to BEARS???');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      break;
    } else if (answerYes[0] === questionFourInput.toLowerCase()) {
      console.log(questionFourInput + ' was right');
      alert('Yes bears! They have cute noses');
      counter++;
      console.log('score: ' + counter);
      break;
    } else if (answerYes[1] === questionFourInput.toLowerCase()) {
      console.log(questionFourInput + ' was right');
      alert('Yes bears! They have cute noses');counter++;
      console.log('score: ' + counter);
      break;
    } else if (c === 1) {
      console.log(questionFourInput + ' was an invalid answer');
      alert(questionFourInput + ' probably wasn\'t a valid answer. You should know better by now.');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
    }
  }
}
//calls question 4
questionFour();

//question 5 yes/no
function questionFive(){
  var answerYes = ['yes', 'y'];
  var answerNo = ['no', 'n'];
  var questionFiveGuesses = 2;
  var questionFiveInput = prompt('Did you do the reading?');
  for (var d = 0; d < questionFiveGuesses; d++) {
    if (answerYes[0] === questionFiveInput.toLowerCase()) {
      console.log(questionFiveInput + ' they did the reading');
      alert('Congrats on being a diligent student!');
      counter++;
      console.log('score: ' + counter);
      break;
    } else if (answerYes[1] === questionFiveInput.toLowerCase()) {
      console.log(questionFiveInput + ' they did the reading');
      alert('Congrats on being a diligent student!');
      counter++;
      console.log('score: ' + counter);
      break;
    } else if (answerNo[0] === questionFiveInput.toLowerCase()) {
      console.log(questionFiveInput + ' they did not do the reading');
      alert('You should do the reading');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      break;
    } else if (answerNo[1] === questionFiveInput.toLowerCase()) {
      console.log(questionFiveInput + ' they did not do the reading');
      alert('You should do the reading');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      break;
    } else if (d === 1) {
      console.log(questionFiveInput + ' was invalid');
      alert(questionFiveInput + ' wasn\'t a valid answer. Have you considered doing the reading?');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
    }
  }
}
//calls question 5
questionFive();

//Pick a number question. I have picked 9
function questionSix() {
  var pickNumber = 9;
  var guesses = 3;
  var pickNumberAnswer = prompt('See if you can guess the number I\'m thinking of. It is between 1 and 15');
  for (var p = 0; p < guesses; p++) {
    //this if is set to a loose equals, because when it was set to strong equals
    //the prompt didn't recognize user input because it wanted a string, and a string of
    //9 wasn't considered a number
    if (pickNumberAnswer == pickNumber){
      console.log(pickNumberAnswer + ' was right');
      alert('Congrats you got it');
      counter++;
      console.log('score: ' + counter);
      break;
    }else if(p === 2){
      console.log(pickNumberAnswer + ' was wrong. Out of tries');
      alert(pickNumberAnswer + ' was wrong. You are out of tries. Please move on or refresh the page');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      break;
    }
    else if (pickNumberAnswer > pickNumber){
      console.log(pickNumberAnswer + ' was too big');
      pickNumberAnswer = prompt('Too big');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
    } else if (pickNumberAnswer < pickNumber) {
      console.log(pickNumberAnswer + ' was too small');
      pickNumberAnswer = prompt('Too small');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
    }
  }
}
//calls question 6
questionSix();

//Start of question 7, which gives an array of animals to guess, and only
//6 chances to guess one of them. If the user gets it wrong on the 6th try,
//they get an alert with the answers and the function ends.

function questionSeven() {
  var weirdAnimals = ['sloth bear', 'maned wolf', 'tree kangaroo'];
  var questionSevenGuesses = 6;
  var questionSevenInput = prompt('What is one of my favorite weird animals? Give answers in singular.');
  for (var j = 0; j < questionSevenGuesses; j++){
    if(weirdAnimals[0] === questionSevenInput.toLowerCase()){
      console.log(questionSevenInput + ' was right');
      alert(questionSevenInput + ' was correct! The rest of the list is ' + weirdAnimals[1] + ' and ' + weirdAnimals[2]);
      counter++;
      console.log('score: ' + counter);
      break;
    } else if (weirdAnimals[1] === questionSevenInput.toLowerCase()){
      console.log(questionSevenInput + ' was right');
      alert(questionSevenInput + ' was correct! The rest of the list is ' + weirdAnimals[0] + ' and ' + weirdAnimals[2]);
      counter++;
      console.log('score: ' + counter);
      break;
    } else if (weirdAnimals[2] === questionSevenInput.toLowerCase()){
      alert(questionSevenInput + ' was correct! The rest of the list is ' + weirdAnimals[0] + ' and ' + weirdAnimals[1]);
      counter++;
      console.log('score: ' + counter);
      break;
    } else if (j === 5) {
      console.log(questionSevenInput + ' was wrong');
      alert(questionSevenInput + ' might still be a cool animal, but unfortunately, you are out of guesses. My favorites are ' + weirdAnimals[0] + ', ' + weirdAnimals[1] + ', and ' + weirdAnimals[2] + '.');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      break;
    } else {
      console.log(questionSevenInput + ' was incorrect');
      questionSevenInput = prompt(questionSevenInput + ' is probably really neat, but it didn\'t make my list. Try again');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
    }
  }
}

//calls question 7
questionSeven();

//lets you know how many guesses you took and your final score
alert('You have reached the end! It took you ' + wrongGuessNumber + ' guesses to get here. You\'re final score is: ' + counter + ' of 7.');
