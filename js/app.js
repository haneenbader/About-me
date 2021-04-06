'use strict'
let score = 0 ;
let userName = prompt('what is your name ?');
alert('welcom ' + userName + ' in my webpage');

let b = prompt('do you think im happy ?')
//console.log(b);
b = b.toUpperCase();
switch (b) {
    case ('YES'):
        alert('im happy');
        score++;
        break;
    case ('NO'):
        alert('wrong , im happy');
        break;
    default:
        alert('ok no problem');
}

let c = prompt('my  age is greater than 20 ? ')
//console.log(c);
c = c.toLowerCase();
switch (c) {
    case ('yes'):
        alert('my age is 27 years');
        score++;
        break;
    case ('no'):
        alert('ok , im 27 years old ');
        break;
    default:
        alert('welcome');
}

let d = prompt('i live  in jordan? ')
//console.log(d);
d = d.toLowerCase();
switch (d) {
    case ('yes'):
        alert('great answer');
        score++;
        break;
    case ('no'):
        alert('i live in jordan ');
        break;
    default:
        alert('welcome');
}

let e = prompt('do you think im an engineer ?')
//console.log(e);
e = e.toLowerCase();
switch (e) {
    case ('yes'):
        alert('yes im an engineer');
        score++;
        break;
    case ('no'):
        alert('im a civil engineer');
        break;
    default:
        alert('ok no problem');
}

let a = prompt('do yo think i love handmadecraft?')
//console.log(a);
a = a.toLowerCase();
switch (a) {
    case ('yes'):
        alert('you answer is true');
        score++;
        break;
    case ('no'):
        alert('you answer is false');
        break;
    default:
        alert('ok no problem');
}




let guessNmber = prompt(' guess !! what is the  number in my mind ?');
guessNmber = parseInt(guessNmber);
for (let i = 1; i < 4; i++) {
    if (parseInt(guessNmber) === 20) {
        alert('great , the number is 20 ')
        score++;
        break;
    } else if (parseInt(guessNmber) < 20) {
        alert('too low')
        guessNmber = prompt('guess another number greater than this number')
    } else if (parseInt(guessNmber) > 20) {
        alert('too high')
        guessNmber = prompt('guess another number less than this number')

    }
}
alert('20 is the correct answer');


let myColor = ['red', 'green']
for (let c=0 ; c<6 ; c++){
    let userColor = prompt('what do you think  the color i love it ?  ');
    userColor = userColor.toLowerCase();

    if(userColor ===  myColor[0] || userColor ===  myColor[1] ){
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















//let myColor = ['red', 'green', 'black', 'yellow'];

//for (let x = 1; x <= 6; x++) {
    
 //   let userColor = prompt('what do you think  the color i love it ?  ');
  //  userColor = userColor.toLowerCase();
  //  for (let n = 0; n < myColor.length; n++) {
  //      if (userColor === myColor[n]) {
  //          alert(' its right this is one of my colors');
   //         break;
   //     } else if (userColor !== myColor[n]) {
//
  //      }
  //      break;
  //  }
  // 
    //userColor = prompt(' enter another  color do you think i love it ? ');
    

//}



//alert('me best colors is ' + myColor);





