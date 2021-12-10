var fs = require('fs');
var array = fs.readFileSync('data.txt').toString().split("\n");
const instructions = array.map(line => {
  const arr = line.split(" ");
  return {direction: arr[0], value: parseInt(arr[1])};
})

let horizontal=0, depth=0, aim=0;
instructions.forEach(inst => {
  const {direction, value} = inst;
  switch(direction) {
    case("up"):
      aim -= value;
      break;
    case("down"):
      aim += value;
      break;
    case("forward"):
      horizontal += value;
      depth += value * aim;
  }
});

console.log("horizontal", horizontal)
console.log("vertical", depth)
console.log(horizontal * depth)