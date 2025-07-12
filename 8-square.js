const args = process.argv;
const size = Number(args[2]);

if (isNaN(size)) {
  console.log("Missing size");
} else {
  let i = 0;
  while (i < size) {
    console.log("X".repeat(size));
    i++;
  }
}