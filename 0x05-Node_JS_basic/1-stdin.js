const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (process.stdin.isTTY) {
  rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
    console.log('Your name is: ', answer);
    rl.close();
  });
} else {
  rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
    console.log('Your name is: ', answer);
    console.log('This important software is now closing');
    rl.close();
  });
}
