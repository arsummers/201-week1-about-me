'use strict';
//declaring variable to use in answer field rather than strings
var answerYes = ['yes', 'YES', 'y', 'Y', 'ye', 'Yes'];
var answerNo = ['no', 'NO', 'n', 'N', 'nope'];


//prompt for question 1 of 5 y/n Qs
//options for Yes answer
var answer = prompt('Have I ever willingly consumed mayonnaise?');
for(var i = 0; i <= answerYes.length; i++){
  if (answerYes[i] === answer){
    console.log('answer: ' + answer + '. This answer is wrong');
    alert('You are wrong');
  }else{
  //I have this log here so that if someone (most likely me) decides to
  //keyboard-smash/other invalid input, I can still see what they wrote
    console.log(answer);
  }
}

//options for No answer
for(i = 0; i <= answerNo.length; i++){
  if (answerNo[i] === answer){
    console.log(answer + ' was right, plus 1 pt');
    alert('You are right. I hate the stuff');
  }
}

//prompt for question 2 of 5 y/n
answer = prompt('Was my first pet a cat?');
for( i = 0; i <= answerYes.length; i++){
  if (answerYes[i] === answer){
    console.log('answer: ' + answer + '. This answer is wrong');
    alert('You are wrong');
  }else{
  //I have a log for invalid answers
    console.log(answer);
  }
}

//options for No answer
for(i = 0; i <= answerNo.length; i++){
  if (answerNo[i] === answer){
    console.log(answer + ' was right, plus 1 pt');
    alert('You are right, but I think they are cute');
  }
}

//prompt for question 3 of 5 y/n
answer = prompt('Do I have a collection of interesting rocks?');
for( i = 0; i <= answerYes.length; i++){
  if (answerYes[i] === answer){
    console.log('answer: ' + answer + '. This answer is right');
    alert('You are right. Rocks are cool');
  }else{
  //I have a log for invalid answers
    console.log(answer);
  }
}

//options for No answer
for(i = 0; i <= answerNo.length; i++){
  if (answerNo[i] === answer){
    console.log(answer + ' was right, plus 1 pt');
    alert('You are wrong, and might need more interesting rocks');
  }
}

//prompt for question 4 of 5 y/n
answer = prompt('Have I lived on the east coast?');
for( i = 0; i <= answerYes.length; i++){
  if (answerYes[i] === answer){
    console.log('answer: ' + answer + '. This answer is wrong');
    alert('Wrong, but I have family there.');
  }else{
  //I have a log for invalid answers
    console.log(answer);
  }
}

//options for No answer
for(i = 0; i <= answerNo.length; i++){
  if (answerNo[i] === answer){
    console.log(answer + ' was right, plus 1 pt');
    alert('You are right, but I still have family there');
  }
}

//prompt for question 5 of 5 y/n
answer = prompt('Have you done the reading?');
for( i = 0; i <= answerYes.length; i++){
  if (answerYes[i] === answer){
    console.log('answer: ' + answer + '. goood answer');
    alert('Congratulations on being a good student');
  }else{
  //I have a log for invalid answers
    console.log(answer);
  }
}

//options for No answer
for(i = 0; i <= answerNo.length; i++){
  if (answerNo[i] === answer){
    console.log(answer + ' wrong');
    alert('Well you should do the reading');
  }
}

//Pick a number question. I have picked 9

var pickNumber = [9, 9, 9, 9];
var pickNumberAnswer = prompt('See if you can guess the number I\'m thinking of. It is between 1 and 15');
/*
This works because it iterates through the pickNumber array, which I have used to limit how many times the
question runs.
Note: This only works because I have set my entire array to the same numer. It is picking an different index,
or a different 9, each time. If I were to change the numbers past index [0] to anything other than 9, the questions
wouldn't work properly. While this works, it is far from a perfect fix.
*/
for(i = 0; i <= pickNumber.length; i++){
  if (pickNumberAnswer > pickNumber[i]){
    console.log(pickNumberAnswer + ' was too big');
    pickNumberAnswer = prompt('Too big');
  }else if(pickNumberAnswer < pickNumber[i]){
    console.log(pickNumberAnswer + ' was too small');
    pickNumberAnswer = prompt('Too small');
  }else if(pickNumberAnswer == pickNumber[i]){
    console.log(pickNumberAnswer + ' was correct');
    alert('Congrats you got it');
    break;
  }
}


//solving 7 with similar thing to yes/no questions;
var faveAnimals = ['bears', ' orangutans', 'dogs'];
//var faveAnimalsAnswer = prompt('What are some my favorite animals');

var faveAnimalsAnswer = prompt('What are some of my favorite animals?');
for( i = 0; i < answerYes.length; i++){
  if (faveAnimals[i] !== faveAnimalsAnswer){
    console.log('answer: ' + faveAnimalsAnswer + '. This answer is wrong!');
    alert('You are wrong');
  }
}

for( i = 0; i < answerYes.length; i++){
  if (faveAnimals[i] === faveAnimalsAnswer){
    console.log('answer: ' + faveAnimalsAnswer + '. This answer is right!');
    alert('You are right');
    break;
  }
}





//Question 7
//Should be able to do a similar thing to #6
//Question: what are some of my favorite animals?

//var faveAnimals = ['bears', ' orangutans', 'dogs'];
/*var faveAnimals =['bears', 'dogs'];
var faveAnimalsAnswer = prompt('What are some my favorite animals');

//in its current state it only accepts answers if they align with their position on the array. How fix?

for(i = 0; i < faveAnimals.length; i++){
  if (faveAnimals[i] !== faveAnimalsAnswer){
    console.log(faveAnimalsAnswer + ' was wrong.');
    faveAnimalsAnswer = prompt('Try again');
  } else if(faveAnimals[i] === faveAnimalsAnswer){
    console.log(faveAnimalsAnswer + ' was correct');
    alert('Congrats! That is one of my favorite animals. Here is the full list of the big ones ' + faveAnimals);
  }
}*/

//at the end, right before break, list the answers
//comparing input at index of array. If the user input is in the array, i
//should return true, or as long as the user put said something in the array, it will give right alert

