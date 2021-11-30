const sentence = "hello there from lighthouse labs";
var i = 0;
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, i); // <= 1s delay to make it noticeable. Can dial it down later.
  i = i + 50;
}
console.log();
