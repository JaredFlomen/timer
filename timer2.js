// const readline = require('readline');
const stdin = process.stdin;
stdin.setRawMode(true);
stdin.setEncoding('utf8');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

stdin.on('data', (input) => {
  // console.log(input);
  if (input === '\u0003') {
    console.log("Thanks for using me, ciao!");
    process.exit();
  }
  //checks for letter b
  else if (input === "b") {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, 0);
    // rl.close();

    //checks for number between 0 and 9
  } else if (input > 0 && input < 10) {
    console.log(`Setting timer for ${input} seconds`);
    setTimeout(() => {
      process.stdout.write('\x07');
      // rl.close();
    }, input*1000);

    //Checks for user to enter control c and quits with an error message
  // } else if (input === '\u0003') {
  //   console.log("Thanks for using me, ciao!");
  //   process.stdout.write("\n");
  //   process.exit();
    
    //handles errors and edge cases that are not in the defined criteria
  } else {
    console.log("Unexpected input, please try again");
    // rl.close();
  }

});