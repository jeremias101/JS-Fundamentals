const args = process.argv;
const value = Number(args[2]);

if (isNaN(value)) {
  console.log("Not a number");
} else {
  console.log("My number: " + value);
}