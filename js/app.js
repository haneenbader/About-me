'use strict'
let userName = prompt('what is your name ?');
alert ('welcom ' + userName + ' in my webpage');

let b = prompt('are you happy')
//console.log(b);
b = b.toUpperCase();
switch(b){
    case('YES'):
    alert('you are happy');
    break;
    case('NO'):
    alert('you are sad');
    break;
    default:
        alert('ok no problem');
}

let c = prompt('your age is greater than 20 ')
//console.log(c);
c = c.toLowerCase();
switch(c){
    case('yes'):
    alert('your age is allowed in this page');
    break;
    case('no'):
    alert('ok no problem ');
    break;
    default:
        alert('welcome');
}

let d = prompt('are you live jordan? ')
//console.log(d);
d = d.toLowerCase();
switch(d){
    case('yes'):
    alert('your live in jordan');
    break;
    case('no'):
    alert('your live out jordan ');
    break;
    default:
        alert('welcome');
}

let e = prompt('are you love handmadecraft?')
//console.log(e);
e = e.toLowerCase();
switch(e){
    case('yes'):
    alert('you love hand craft');
    break;
    case('no'):
    alert('you  dont love hand craft');
    break;
    default:
        alert('ok no problem');
}

let a = prompt('do yo think i love handmadecraft?')
//console.log(a);
a = a.toLowerCase();
switch(a){
    case('yes'):
    alert('you answer is true');
    break;
    case('no'):
    alert('you answer is false');
    break;
    default:
        alert('ok no problem');
}

alert ('welcom ' + userName ); 
document.write('welcom ' + userName );