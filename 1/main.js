var fs = require('fs');
var array = fs.readFileSync('data.txt').toString().split("\n");
let jumpCount = 0
console.log(array[0]);
// for(let i = 1; i < array.length; i++) {
//   let increased = parseInt(array[i]) > parseInt(array[i-1]);
//   if(increased) jumpCount++;
//   console.log(array[i] + " (" + (increased ? "increased" : "decreased") + ")", "Total: " + jumpCount);
// }
// console.log(jumpCount);

const val = index => parseInt(array[index])

for(let i = 3; i < array.length; i++) {
  let sumA = val(i - 3) + val(i - 2) + val( i - 1)
  let sumB = val(i - 2) + val( i - 1) + val(i)
  if(sumA < sumB) jumpCount++;
}

console.log(jumpCount)