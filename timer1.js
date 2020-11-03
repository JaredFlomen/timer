const userInput = process.argv.slice(2);

for(const i of userInput) {
  if (i > 0 || Number.isNaN(i)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, i*1000);
  }
}