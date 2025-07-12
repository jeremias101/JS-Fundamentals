const args = process.argv;
const count = Number(args[2]);

if (isNaN(count)) {
  console.log("Missing number of occurrences");
} else {
  let i = 0;
  while (i < count) {
    i++;
    console.log("C is fun");
  }
}
