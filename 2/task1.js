var fs = require('fs');
var array = fs.readFileSync('data.txt').toString().split("\n");
const instructions = array.map(line => {
  const arr = line.split(" ");
  return {direction: arr[0], value: parseInt(arr[1])};
})

let horizontal=0, vertical=0;
instructions.forEach(inst => {
  const {direction, value} = inst;
  console.log(inst)
  switch(direction) {
    case("up"):
      vertical -= value
      break;
    case("down"):
      vertical += value;
      break;
    case("forward"):
      horizontal += value;
  }
});

console.log("horizontal", horizontal)
console.log("vertical", vertical)
console.log(horizontal * vertical)