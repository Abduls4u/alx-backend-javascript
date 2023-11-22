const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

if (process.stdin.isTTY) {
  rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
    ('Your name is: ', answer);
    rl.close();
  });
} else {
  rl.question('Welcome to Holberton School, what is your name?\n', (answer) => {
    process.stdout.write('Your name is: ', answer);
    process.stdout.write('This important software is now closing');
    rl.close();
  });
}
rl.on('SIGINT', () => {
  process.stdout.write('This important software is now closing');
});
