const args = process.argv;
const a = Number(args[2]);
const b = Number(args[3]);

function add(x, y) {
  return x + y;
}

console.log(add(a, b));