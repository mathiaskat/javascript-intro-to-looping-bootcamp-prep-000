function forLoop(array){
for (i = 0; i < 25; i++) {
if(i===1){
array.push('I am 1 strange loop.');
} else {
array.push('I am ${i} strange loop.')
}
}
return array;
}
function doWhileLoop(array) {
  
var i = 0;

function incrementVariable() {
  i = i + 1;
}

do {
  console.log("doo-bee-doo-bee-doo");
  incrementVariable();
} while (i < 5);
}