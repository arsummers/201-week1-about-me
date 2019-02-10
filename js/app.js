'use strict';
/* FOR
THE
LOVE
OF
GOD
UPDATE
YOUR
README*/
//declaring variable to use in answer field rather than strings

//prompt for question 1 of 5 y/n Qs
//options for Yes answer

/*function questionOne() {
  var answerYes = ['YES', 'y'];
  var answerNo = ['NO', 'n'];

  do {
    var answer = prompt('Have I ever willingly consumed mayonnaise?');
    var validAnswer = false;
    for (var i = 0; i < answerYes.length; i++) {
      if (answerYes[i] === answer) {
        console.log('answer: ' + answer + '. This answer is wrong');
        alert('You are wrong');
        break;
      } else if (answerNo[i] === answer) {
        validAnswer = true;
        alert('That is correct!');
        console.log(answer);
      }
    }
    // eslint-disable-next-line no-debugger
    if (!validAnswer) {
      console.log(answer);
      alert('Give a clearer answer');
    }
  } while (!validAnswer);
}

questionOne();*/

function questionOne() {
  var answerYes = ['yes', 'y'];
  var answerNo = ['no', 'n'];

  var questionOneGuesses = 2;
  var questionOneInput = prompt('Have I ever willingly consumed mayonnaise?');
  for (var i = 0; i < questionOneGuesses; i++) {
    if (answerNo[0] === questionOneInput.toLowerCase()) {
      console.log(questionOneInput + 'was right');
      alert('You are right. I hate mayo');
      break;
    } else if (answerNo[1] === questionOneInput.toLowerCase()) {
      console.log(questionOneInput + 'was right');
      alert('You are right. I hate mayo');
      break;
    } else if (answerYes[0] === questionOneInput.toLowerCase()) {
      console.log(questionOneInput + ' was wrong');
      alert('That was wrong. Mayo is vile.');
      break;
    } else if (answerYes[1] === questionOneInput.toLowerCase()) {
      console.log(questionOneInput + ' was wrong');
      alert('That was wrong. Mayo is vile.');
      break;
    } else if (i === 1) {
      console.log(questionOneInput + ' was an invalid answer');
      alert(questionOneInput + ' was not a valid answer. Too bad you only had one shot at it');
    }
  }
}

questionOne();

// //prompt for question 2 of 5 y/n
// answer = prompt('Was my first pet a cat?');
// for( i = 0; i <= answerYes.length; i++){
//   if (answerYes[i] === answer){
//     console.log('answer: ' + answer + '. This answer is wrong');
//     alert('You are wrong');
//   }else{
//   //I have a log for invalid answers
//     console.log(answer);
//   }
// }

// //options for No answer
// for(i = 0; i <= answerNo.length; i++){
//   if (answerNo[i] === answer){
//     console.log(answer + ' was right, plus 1 pt');
//     alert('You are right, but I think they are cute');
//   }
// }

// //prompt for question 3 of 5 y/n
// answer = prompt('Do I have a collection of interesting rocks?');
// for( i = 0; i <= answerYes.length; i++){
//   if (answerYes[i] === answer){
//     console.log('answer: ' + answer + '. This answer is right');
//     alert('You are right. Rocks are cool');
//   }else{
//   //I have a log for invalid answers
//     console.log(answer);
//   }
// }

// //options for No answer
// for(i = 0; i <= answerNo.length; i++){
//   if (answerNo[i] === answer){
//     console.log(answer + ' was right, plus 1 pt');
//     alert('You are wrong, and might need more interesting rocks');
//   }
// }

// //prompt for question 4 of 5 y/n
// answer = prompt('Have I lived on the east coast?');
// for( i = 0; i <= answerYes.length; i++){
//   if (answerYes[i] === answer){
//     console.log('answer: ' + answer + '. This answer is wrong');
//     alert('Wrong, but I have family there.');
//   }else{
//   //I have a log for invalid answers
//     console.log(answer);
//   }
// }

// //options for No answer
// for(i = 0; i <= answerNo.length; i++){
//   if (answerNo[i] === answer){
//     console.log(answer + ' was right, plus 1 pt');
//     alert('You are right, but I still have family there');
//   }
// }

// //prompt for question 5 of 5 y/n
// answer = prompt('Have you done the reading?');
// for( i = 0; i <= answerYes.length; i++){
//   if (answerYes[i] === answer){
//     console.log('answer: ' + answer + '. goood answer');
//     alert('Congratulations on being a good student');
//   }else{
//   //I have a log for invalid answers
//     console.log(answer);
//   }
// }

// //options for No answer
// for(i = 0; i <= answerNo.length; i++){
//   if (answerNo[i] === answer){
//     console.log(answer + ' wrong');
//     alert('Well you should do the reading');
//   }
// }

//Pick a number question. I have picked 9
var pickNumber = 9;
var guesses = 3;
var pickNumberAnswer = prompt('See if you can guess the number I\'m thinking of. It is between 1 and 15');

//Will move to end of entire cycle of you button mash?

for (var p = 0; p < guesses; p++) {
  if (pickNumberAnswer == pickNumber){
    console.log(pickNumberAnswer + ' was right');
    alert('Congrats you got it');
    break;
  }else if(p === 2){
    console.log(pickNumberAnswer + ' was wrong. Out of tries');
    alert(pickNumberAnswer + ' was wrong. You are out of tries. Please move on or refresh the page');
    break;
  }
  else if (pickNumberAnswer > pickNumber){
    console.log(pickNumberAnswer + ' was too big');
    pickNumberAnswer = prompt('Too big');
  } else if (pickNumberAnswer < pickNumber) {
    console.log(pickNumberAnswer + ' was too small');
    pickNumberAnswer = prompt('Too small');
  }
}


// /*
// */
// var faveAnimal = ['dogs', 'bears', 'beeps', 'boops', 'fish', 'piggo'];
// var faveAnimalAnswer = prompt('What is one of my favorite animals?');
// for( i = 0; i <= faveAnimal.length; i++){
//   if (faveAnimal[i] === faveAnimalAnswer){
//     console.log('answer: ' + faveAnimalAnswer + '. This answer is right');
//     alert('Yes I like those');
//     break;
//   }else{
//   //I have a log for invalid answers]
//     console.log(faveAnimalAnswer);
//   }
// }

//figure out answer then function it the fuck up.
//Going to exactly clone what I did for #6, but with
//dif variable, then start incorporating stuff
//from q1 with picking answer from arrays. Then, wrap
//in functions
//need to set it to put a message when counter reaches six

/*
var faveAnimals = ['dogs', 'salem', 'bears', 'pikachu'];
var altAnimals = ['wasps'];
var counter = 0;

do {
  var inputAnimal = prompt('Try to guess some of my favorite animals. One at a time, please');
  var validAnimal = false;
  for (var j = 0; j < 4; j++) {
    if (altAnimals[j] === inputAnimal) {
      console.log(inputAnimal + 'was wrong');
      alert('You are wrong. ' + inputAnimal + ' probably plays an important role in our ecosystem, but bees do it better');
    } else if ((faveAnimals[j]) === inputAnimal) {
      validAnimal = true;
      console.log(inputAnimal + ' was right');
      alert('you were right!');
      break;
    }
  }
  if (!validAnimal) {
    console.log(inputAnimal + ' was wrong');
    alert('wrooonnnngggg');
    if (counter < 4) {
      counter++;
    }

  }
} while (!validAnimal);
*/

var weirdAnimals = ['sloth bear', 'maned wolf', 'tree kangaroo'];
var questionSevenGuesses = 6;
var questionSevenInput = prompt('What is one of my favorite weird animals? Give answers in singular.');
//debugger;

for (var j = 0; j < questionSevenGuesses; j++){
  if(weirdAnimals[0] === questionSevenInput.toLowerCase()){
    console.log(questionSevenInput + ' was right');
    alert(questionSevenInput + ' was correct! The rest of the list is ' + weirdAnimals[1] + ' and ' + weirdAnimals[2]);
    break;
  } else if (weirdAnimals[1] === questionSevenInput.toLowerCase()){
    console.log(questionSevenInput + ' was right');
    alert(questionSevenInput + ' was correct! The rest of the list is ' + weirdAnimals[0] + ' and ' + weirdAnimals[2]);
    break;
  } else if (weirdAnimals[2] === questionSevenInput.toLowerCase()){
    alert(questionSevenInput + ' was correct! The rest of the list is ' + weirdAnimals[0] + ' and ' + weirdAnimals[1]);
    break;
  } else if (j === 5) {
    console.log(questionSevenInput + ' was wrong');
    alert(questionSevenInput + ' might still be a cool animal, but unfortunately, you are out of guesses. My favorites are ' + weirdAnimals[0] + ', ' + weirdAnimals[1] + ', and ' + weirdAnimals[2] + '.');
    break;
  } else {
    console.log(questionSevenInput + ' was incorrect');
    questionSevenInput = prompt(questionSevenInput + ' is probably really neat, but it didn\'t make my list. Try again');
  }
}
