console.log('app.js is loading')


// defining a function
// declaring a function
// creating the reusable block of code
// to be used at a later time in the program
function sayHello(personsName){
    //write the code to say hello here
    console.log(`Hello ${personsName}`)
}

// execute the function
// invoke the function
// call the function

// write the functions name ()
sayHello('Shavon'); //runs the block code defined by the sayHello func
sayHello('Megan');
sayHello('Ben');
sayHello('Augusta');


function sayGoodbye(phrase, personsName){
    console.log(`${phrase}, ${personsName}`);
}

// define and call the function
// sayGoodbye should accept two parameters, one phrase, and on person
// add it logs a message
// Adios, Laura
// Chao, Becky
// Goodbye, Chad
// Peace, Frankie

sayGoodbye('Adios', 'Laura');
sayGoodbye('Chao', 'Becky');
sayGoodbye('Goodbye', 'Chad');
sayGoodbye('Peace', 'Frankie');


function add(x, y){
    return x + y // return produces a value for the function when it is called
}

console.log(add(2, 2), "<______LOOK AT THIS")


function getPlayerUserName(username){
    return username.toUpperCase();
}

// before the game, we don't know the player's name
let playerOne;
let playerTwo;
let playerThree;
let playerFour;


// after they join the game, we want to set the player's name
playerOne = getPlayerUserName('Luke'); // == > 'Luke'
playerTwo = getPlayerUserName('Laura'); /// == > 'Laura'
playerThree = getPlayerUserName('Kate');
playerFour = getPlayerUserName('Kevin');




// 1.
function maxOfTwoNumbers(x, y) {
    if (x >= y) {
      return x;
    } else {
      return y;
    }
    
    // or more "elegantly" using the fantastic ternary expression!
    // return  x >= y ? x : y;
  }
  
  console.log(maxOfTwoNumbers(3, 9));
  
  // 2.
  function maxOfThree(n1, n2, n3) {
    if ((n1 >= n2) && (n1 >= n3)) {
        return n1;
    } else if ((n2 >= n1) && (n2 >= n3)) {
        return n2;
    } else if ((n3 >= n1) && (n3 >= n1)) {
        return n3;
    }
  }

  console.log(maxOfThree('12', '24', '08'));

  // 3.
  function isCharAVowel(character){ 
    if (character = 'a', 'e', 'i', 'o', 'u') {
        return true;
    } else {
        return false;
    }
  }

  console.log(isCharAVowel(`p`));
  //to be edited, keeps on returning true

  // 4.
  function sumArray(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array [i];
    } return sum;
  }

  console.log(sumArray([12, 6]));

 // 5. 
 function multiplyArray(array) {
    let product = 1;
    for (let i = 0; i < array.length; i++) {
        product = product * array [i];
    }   return product;
 }

 console.log(multiplyArray([5, 6]));

 // 6. 
 function numArgs (...arguments) {
    return arguments.length;
 }

 console.log(numArgs(['1', '5', '2']));
// to be edited, keeps on returning 1


// 7. 
function reverseString(char) {
    return char.split('').reverse().join('');
}

console.log(reverseString('kachow'));

// 8.
function longestStringInArray(string) {
    const longestArray = string.split(' ').sort(function (a, b)  { return b.length - a.length; });
    return longestArray[0].length;
}

console.log(longestStringInArray('kfc', 'mcdo'));

// 9. 
function stringsLongerThan (array, length) {
    return array.filter(function([str]) {
        return (str.length > length);
    });
}

console.log(stringsLongerThan(['mcdo', 'chjunior', 'jollibee']));