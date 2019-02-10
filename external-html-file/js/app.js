'use strict';


//I am keeping these variables global so each function can access them easily
//keeps track of right guesses
var counter = 0;

//keeps track of wrong guesses
var wrongGuessNumber = 0;

//keeps track of total guesses
var totalGuesses = 0;

//stays global for endgame access, takes input for name
var userName = prompt('What is your name?');

function helloName(){
  alert('Hello ' + userName + ' we\'re going to play a guessing game!');
}
//lets user know we are about to start
helloName();


//I haven't annotated questions 2-5, because they use the exact same logic as question 1

//Question 1: y/n.

function questionOne() {
//these are my options for yes and no answers. Will accept either caps or lowercase
  var answerYes = ['yes', 'y'];
  var answerNo = ['no', 'n'];

  //this is the counter for the for loop. I have it set to 2, even though they only get one chance
  //because this won't execute the stuff at the end of the loop otherwise
  var questionOneGuesses = 2;

  // asks question, takes input and uses it as variable when I check the variable again
  var questionOneInput = prompt('Have I ever willingly consumed mayonnaise?');

  //i starts at 0. As long as i is less than the guesses variable( will take 0, or 1, breaks loop as soon as it
  //hits 2), i will increment up one level
  for (var i = 0; i < questionOneGuesses; i++) {

    //if the answer the user put in matches my answerNo array at the index of [0], the console will log,
    //the alert will pop up saying the user was right, my counter for number of right guesses will increment by 1
    //console logs the score, counter for total number of guesses increments by 1 and logs to console,
    //user breaks out of loop. If the user input doesn't match the answer, it checks to see if it matches the next else if
    if (answerNo[0] === questionOneInput.toLowerCase()) {
      console.log(questionOneInput + ' was right');
      alert('You are right. I hate mayo');
      counter ++;
      console.log('score: ' + counter);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;

    //if the answer the user put in matches my answerNo array at the index of [1], the console will log,
    //the alert will pop up saying the user was right, my counter for number of right guesses will increment by 1
    //console logs the score, counter for total number of guesses increments by 1 and logs to console,
    //user breaks out of loop. If the user input doesn't match the answer, it checks to see if it matches the next else if
    } else if (answerNo[1] === questionOneInput.toLowerCase()) {
      console.log(questionOneInput + ' was right');
      alert('You are right. I hate mayo');
      counter++;
      console.log('score: '+ counter);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;

    //if the answer the user put in matches my answerYes array at the index of [0], the console will log,
    //the alert will pop up saying the user was wrong, my counter for number of wrong guesses will increment by 1
    //console logs the number wrong, counter for total number of guesses increments by 1 and logs to console,
    //user breaks out of loop. If the user input doesn't match the answer, it checks to see if it matches the next else if
    } else if (answerYes[0] === questionOneInput.toLowerCase()) {
      console.log(questionOneInput + ' was wrong');
      alert('That was wrong. Mayo is vile.');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;

    //if the answer the user put in matches my answerYes array at the index of [1], the console will log,
    //the alert will pop up saying the user was wrong, my counter for number of wrong guesses will increment by 1
    //console logs the number wrong, counter for total number of guesses increments by 1 and logs to console,
    //user breaks out of loop. If the user input doesn't match the answer, it checks to see if it matches the next else if
    } else if (answerYes[1] === questionOneInput.toLowerCase()) {
      console.log(questionOneInput + ' was wrong');
      alert('That was wrong. Mayo is vile.');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;

      //This program checks for valid answers first because otherwise it asks the question until input it valid.
      //If the user input an invalid answer, the program checks against the valid answers, sees that the input
      //was invalid, and checks to see if i equals 1 yet. Since i is still at 0, it bypasses this, and goes to
      //the beginning of the for loop again. The program hangs onto the input from when i was 0, sees that it still
      //doesn't match valid input, and triggers this statement because i is at 1 now.
      //This part of the program lets the user know that their input was bad, adds to the wrong guesses counter,
      //logs the wrong guesses score, adds to the total guesses number, and logs that number.
    } else if (i === 1) {
      console.log(questionOneInput + ' was an invalid answer');
      alert(questionOneInput + ' was not a valid answer. Too bad you only had one shot at it');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
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
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (answerYes[1] === questionTwoInput.toLowerCase()) {
      console.log(questionTwoInput + ' was right');
      alert('You are right!  I got a black lab puppy from the pound, and named him Pups because I was six at the time.');
      counter++;
      console.log('score: ' + counter);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (answerNo[0] === questionTwoInput.toLowerCase()) {
      console.log(questionTwoInput + ' was wrong');
      alert('You are wrong. My first pet was a sweet rescue puppy, but you don\'t get to know his name because you gave the wrong answer');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (answerNo[1] === questionTwoInput.toLowerCase()) {
      console.log(questionTwoInput + ' was wrong');
      alert('You are wrong. My first pet was a sweet rescue puppy, but you don\'t get to know his name because you gave the wrong answer');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (a === 1) {
      console.log(questionTwoInput + ' was invalid');
      alert(questionTwoInput + ' wasn\'t a valid answer at all. My first pet was a dog, but you need to give better answers');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
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
      console.log(questionThreeInput + ' was was wrong');
      alert('You\'re wrong. I was lucky enough to watch it');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (answerNo[1] === questionThreeInput.toLowerCase()) {
      console.log(questionThreeInput + ' was wrong');
      alert('You\'re wrong. I was lucky enough to watch it');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (answerYes[0] === questionThreeInput.toLowerCase()) {
      console.log(questionThreeInput + ' was right');
      alert('You are right! The night was even clear enough for it');
      counter++;
      console.log('score: ' + counter);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (answerYes[1] === questionThreeInput.toLowerCase()) {
      console.log(questionThreeInput + ' was right');
      alert('You are right! The night was even clear enough for it');
      counter++;
      console.log('score: ' + counter);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (b === 1) {
      console.log(questionThreeInput + ' was an invalid answer');
      alert(questionThreeInput + ' was not a valid answer. Pretty rude of you to give a bad answer. The moon deserves better.');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
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
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (answerNo[1] === questionFourInput.toLowerCase()) {
      console.log(questionFourInput + ' was wrong');
      alert('That was not nice to BEARS???');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (answerYes[0] === questionFourInput.toLowerCase()) {
      console.log(questionFourInput + ' was right');
      alert('Yes bears! They have cute noses');
      counter++;
      console.log('score: ' + counter);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (answerYes[1] === questionFourInput.toLowerCase()) {
      console.log(questionFourInput + ' was right');
      alert('Yes bears! They have cute noses');counter++;
      console.log('score: ' + counter);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (c === 1) {
      console.log(questionFourInput + ' was an invalid answer');
      alert(questionFourInput + ' probably wasn\'t a valid answer. You should know better by now.');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
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
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (answerYes[1] === questionFiveInput.toLowerCase()) {
      console.log(questionFiveInput + ' they did the reading');
      alert('Congrats on being a diligent student!');
      counter++;
      console.log('score: ' + counter);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (answerNo[0] === questionFiveInput.toLowerCase()) {
      console.log(questionFiveInput + ' they did not do the reading');
      alert('You should do the reading');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (answerNo[1] === questionFiveInput.toLowerCase()) {
      console.log(questionFiveInput + ' they did not do the reading');
      alert('You should do the reading');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    } else if (d === 1) {
      console.log(questionFiveInput + ' was invalid');
      alert(questionFiveInput + ' wasn\'t a valid answer. Have you considered doing the reading?');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
    }
  }
}
//calls question 5
questionFive();

//question 6, higher lower number guess. I have picked 4.
function questionSix() {
  //number to check against
  var pickNumber = 4;

  //set to three so that code will execute at [0], [1], [2] before the loop terminates
  var guesses = 3;

  //asks question, takes user input
  var pickNumberAnswer = prompt('How many cities have I lived in?');

  //p is set to 0. As long as p is less than [3], p will increment
  for (var p = 0; p < guesses; p++) {
    //this if is set to a loose equals, because when it was set to strong equals
    //the prompt didn't recognize user input because it wanted a string, and a string of
    //9 wasn't considered a number for >, < purposes
    //checks to see if user input was the right number. If it was, it logs input, alerts the user
    //that they were right, increments score counter, logs score, increments total guesses, logs number,
    //breaks user out of loop
    if (pickNumberAnswer == pickNumber){
      console.log(pickNumberAnswer + ' was right');
      alert('That was right! You may proceed.');
      counter++;
      console.log('score: ' + counter);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;

    //p is still at [0]. This part won't execute until p has reached [2], and the user is still giving the wrong
    //number. If they get the right number when p has reached [2], it will execute the code in the section above.
    //This lets the user know they are out of tries. Logs relevant info to console, sends them an alert saying
    //they are out of tries, breaks them out of loop. If you give an answer that isn't a number, the code throws
    //them directly here, becauses it can't check if a keyboard smash is bigger or small than a number
    }else if(p === 2){
      console.log(pickNumberAnswer + ' was wrong. Out of tries');
      alert(pickNumberAnswer + ' was wrong. You are out of tries, or did not give a number. Please move on or refresh the page');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;
    }

    //if the user hasn't input the right answer, and p isn't at [2] yet, it brings the user here. It will let
    //them know if their answer is too big or too small, log relevant info to console, increment wrong answer
    //and answer number counters
    else if (pickNumberAnswer > pickNumber){
      console.log(pickNumberAnswer + ' was too big');
      pickNumberAnswer = prompt('Too big');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
    } else if (pickNumberAnswer < pickNumber) {
      console.log(pickNumberAnswer + ' was too small');
      pickNumberAnswer = prompt('Too small');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
    }
  }
}
//calls question 6
questionSix();

//Start of question 7, which gives an array of animals to guess, and only
//6 chances to guess one of them. If the user gets it wrong on the 6th try,
//they get an alert with the answers and the function ends. If they get an answer right, they get the ones
//they missed.

function questionSeven() {

  //here are the animals they can guess
  var weirdAnimals = ['sloth bear', 'maned wolf', 'tree kangaroo'];

  //guess counter. Set to 6 so that the code can execute from [0] to [5] without the loop ending
  var questionSevenGuesses = 6;

  //asks question
  var questionSevenInput = prompt('What is one of my favorite weird animals? Give answers in singular.');

  //as long as j is less than [6], the loop will run and increment
  for (var j = 0; j < questionSevenGuesses; j++){

    //checks to see if user input was the same as my weird animal at [0]. If the user input matches, it
    //executes the code below. It logs input, lets the user know they were right and gives them the other possible
    //answers. The counters increment and log. The user breaks out of the loop.
    if(weirdAnimals[0] === questionSevenInput.toLowerCase()){
      console.log(questionSevenInput + ' was right');
      alert(questionSevenInput + ' was correct! The rest of the list is ' + weirdAnimals[1] + ' and ' + weirdAnimals[2]);
      counter++;
      console.log('score: ' + counter);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;

    //checks to see if user input was the same as my weird animal at [1]. If the user input matches, it
    //executes the code below. It logs input, lets the user know they were right and gives them the other possible
    //answers. The counters increment and log. The user breaks out of the loop.
    } else if (weirdAnimals[1] === questionSevenInput.toLowerCase()){
      console.log(questionSevenInput + ' was right');
      alert(questionSevenInput + ' was correct! The rest of the list is ' + weirdAnimals[0] + ' and ' + weirdAnimals[2]);
      counter++;
      console.log('score: ' + counter);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;

    //checks to see if user input was the same as my weird animal at [2]. If the user input matches, it
    //executes the code below. It logs input, lets the user know they were right and gives them the other possible
    //answers. The counters increment and log. The user breaks out of the loop.
    } else if (weirdAnimals[2] === questionSevenInput.toLowerCase()){
      alert(questionSevenInput + ' was correct! The rest of the list is ' + weirdAnimals[0] + ' and ' + weirdAnimals[1]);
      counter++;
      console.log('score: ' + counter);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;

      //this will only execute if the user has guessed wrong from p[0] to p[5]. If they get it right on p[5],
      //the relevent piece of code above will execute. If p is still less than [5], it will execute the code in
      // the else statement. When the user has input 6 bad answers, the console will log the wrong answer, they will
      //get an alert telling them that they are wrong, relevent counters increment and log, user breaks out of loop.
    } else if (j === 5) {
      console.log(questionSevenInput + ' was wrong');
      alert(questionSevenInput + ' might still be a cool animal, but unfortunately, you are out of guesses. My favorites are ' + weirdAnimals[0] + ', ' + weirdAnimals[1] + ', and ' + weirdAnimals[2] + '.');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
      break;

      //if the user hasn't given a correct answer, and the countdown mechanism is still under [5], the below code
      //will execute. It logs user input from p[0], lets them know they were wrong and takes new input that
      //will feed into the p[1] loop, and increments and logs relevent counters. This code will keep executing
      //until the user meets any of the conditions to run the code parts that live above here.
    } else {
      console.log(questionSevenInput + ' was incorrect');
      questionSevenInput = prompt(questionSevenInput + ' is probably really neat, but it didn\'t make my list. Try again');
      wrongGuessNumber++;
      console.log('wrong guesses: ' + wrongGuessNumber);
      totalGuesses++;
      console.log('total guesses: ' + totalGuesses);
    }
  }
}

//calls question 7
questionSeven();

//lets you know how many guesses you took and your final score
function endGame(){
  alert('You have reached the end ' + userName + '! It took you ' + totalGuesses + ' guesses to get here. You got ' + wrongGuessNumber + ' wrong. You\'re final score is: ' + counter + ' of 7.');
}

endGame();
