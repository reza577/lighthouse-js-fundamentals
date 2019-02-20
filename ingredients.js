var ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];
// Write a while loop that prints out the contents of ingredients:
console.log("using while:")

var list = 0;
while (list < ingredients.length) {
  console.log(ingredients[list])
  list++
}
console.log("Using for:")

// Write a for loop that prints out the contents of ingredients:
for (var i = 0; i < ingredients.length; i++) {
  console.log(ingredients[i]);
}
for (var i = 7; i > ingredients.lenght; i--) {
  console.log(ingredients[i]);
}
