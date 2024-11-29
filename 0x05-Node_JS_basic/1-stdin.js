/**
 * Displays a welcome message in the STDOUT
 * Listens for user input from the STDIN
 * Displays the user's name with the received input
 */
process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.on('data', (data) => {
  if (data.length > 0) {
    process.stdout.write(`Your name is: ${data}`);
  }
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing\n');
});
