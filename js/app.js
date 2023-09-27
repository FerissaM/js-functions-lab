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