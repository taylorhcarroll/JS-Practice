console.log ("If you can see this the js file is hooked up.")


// var meant it was wide open and didn't keep variables constant
// DO NOT USE VAR IF YOU CAN USE LET OR CONST
// const cannot be changed

// let will allow us to change the variables

const hamster = { 
    // boolean statement
    fluffy: true,
    // defined a string value
    name: "Hammond",
    // numerical value
    age: 40,
    legs: 3,
    // this is an array with multiple values
    children: ["Captain Hook", "Peter Pan", "Sally"],
    // another string value
    nickname: "Ham Sir",
    chewing: function chew(what) {
        console.log("chewing", what);
    }
}

const dad = {
    relationship: "father",
    name: "Taylor",
    age: 29,
    specieshuman: true,

}

const mom = {
    relationship: "mother",
    name: "Kelly",
    age: 33,
    specieshuman: true,
}

const daughter = {
    relationship: "daughter",
    name: "Penny",
    age: 5,
    specieshuman: true,
}

const cat = {
    relationship: "pet",
    name: "Mochi",
    age: 2,
    specieshuman: false,
    
}

const familyMembers = [dad, mom, daughter, cat];

console.log("familyMembers", familyMembers);

// can also arrange it like:
// Note: you cannot re-use dad or momn because they are already defined 
// in an array above as a CONST

// const familyMembers2 = [
//     father = {
//         name: "Patrick",
//     },
//     mother = {
//         name: "Debora",
//     },
// ]