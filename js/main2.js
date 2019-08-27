// I can use brackets if I don't know the value of "name"
console.log("Hamster Stuff", hamster["name"]);
// can also be written this way
// console.log("Hamster Stuff", hamster.name);

// you can use ${} to call things as long as you put it inside of ` `
console.log(`The hamster children are ${hamster.children[0]}, ${hamster.children[1]}, and ${hamster.children[2]}`);

// telling where i starts///tells how long it runs to the length of the array, and last bit says how many times it runs each increment which is 1//// 
for (let i = 0; i < hamster.children.length; i++) {
    console.log(`Hamster child: ${i + 1}: is ${hamster.children[i]}`)
}
// ${i + 1} is to call the first kid your 1st kid and not your zero kid

// another way to write this loop
hamster.children.forEach((item, index) => {
    console.log(`Hamster child ${index} ${item}`);
});