'use strict';

let score = 0 ;
let userName = prompt('what is your name ?');
alert('welcom ' + userName + ' in my webpage');

let b = 'null';
function question1 (){
  b= prompt('do you think im happy ?');
  b = b.toUpperCase();
  switch (b) {
  case ('YES'):
  case ('Y'):
    alert('im happy');
    score++;
    break;
  case ('NO'):
  case ('N'):
    alert('wrong , im happy');
    break;
  default:
    alert('ok no problem');
  }
}question1();



let c = 'null';
function question2(){
  c= prompt('my  age is greater than 20 ? ');
  c = c.toLowerCase();
  switch (c) {
  case ('yes'):
  case ('y'):
    alert('my age is 27 years');
    score++;
    break;
  case ('no'):
  case ('n'):
    alert('ok , im 27 years old ');
    break;
  default:
    alert('welcome');
  }
  return (c);
}
question2();


let d ='null';
function question3(){
  d = prompt('i live  in jordan? ');
  d = d.toLowerCase();
  switch (d) {
  case ('yes'):
  case ('y'):
    alert('great answer');
    score++;
    break;
  case ('no'):
  case ('n'):
    alert('i live in jordan ');
    break;
  default:
    alert('welcome');
  }
}
question3();


let e ='null';
function question4(){
  e = prompt('do you think im an engineer ?');
  e = e.toLowerCase();
  switch (e) {
  case ('yes'):
  case ('y'):
    alert('yes im an engineer');
    score++;
    break;
  case ('no'):
  case ('n'):
    alert('im a civil engineer');
    break;
  default:
    alert('ok no problem');
  }
}
question4();


let a = 'null';
function question5(){
  a = prompt('do yo think i love handmadecraft?');
  a = a.toLowerCase();
  switch (a) {
  case ('yes'):
  case ('y'):
    alert('your answer is true');
    score++;
    break;
  case ('no'):
  case ('n'):
    alert('your answer is false');
    break;
  default:
    alert('ok no problem');
  }
} question5();


let guessNmber = 'null';
function question6 (){
  guessNmber = prompt(' guess !! what is the  number in my mind ?');
  guessNmber = parseInt(guessNmber);
  for (let i = 1; i < 4; i++) {
    if (parseInt(guessNmber) === 20) {
      alert('great , the number is 20 ');
      score++;
      break;
    } else if (parseInt(guessNmber) < 20) {
      alert('too low');
      guessNmber = prompt('guess another number greater than this number');
    } else if (parseInt(guessNmber) > 20) {
      alert('too high');
      guessNmber = prompt('guess another number less than this number');
    }
  }
  alert('20 is the correct answer');
} question6();


let myColor= 'null';
function question7(){
  myColor = ['red', 'green'];
  for (let c=0 ; c<6 ; c++){
    let userColor = prompt('what do you think  the color i love it ?  ');
    userColor = userColor.toLowerCase();

    if(userColor === myColor[0] || userColor === myColor[1] ){
      alert('its right this is one of my colors');
      score++;
      break;
    }else {
      alert('its wrong this is not one of my colors');
    }
  }
  alert('me best colors is ' + myColor);

  alert('your score is ' + score ) ;
  alert('welcom ' + userName);

} question7();







