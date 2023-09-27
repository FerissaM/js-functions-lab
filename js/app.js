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