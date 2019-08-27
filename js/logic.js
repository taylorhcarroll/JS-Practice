console.log("If you can see this you are connected to logic.js")

const firstName = "Taylor"
const lastName = "Carroll"

function fullName(){
    const myName = `${firstName} + ${lastName}`;
    console.log("my name is", myName);
}

fullName();

const crayonColors = ["Green", "Blue", "Yellow"];
const fullBox = 4;

function addColor(newColor){
    crayonColors.push(newColor);
    return crayonColors.length;
}

let crayonBoxNumber = addColor("Mulberry");
if (crayonBoxNumber < fullBox) {
    console.log("pick more colors");
}else{
    console.log("your box is full I can't add this");
}

console.log("crayonColorLength", crayonColors.length);