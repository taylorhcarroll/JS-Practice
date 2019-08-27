const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}

console.log("height of wardrobe", wardrobe.height);
console.log("width of wardrobe", wardrobe.width);
console.log("manufacturer of wardrobe", wardrobe.manufacturer);
console.log("depth of wardrobe", wardrobe.depth);
console.log("contents of wardrobe", wardrobe.contents);

const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}

//Lightning Exercises 1: Use dot notation to output all of the dimensions of the Empire State Building to the console.
console.log("stories in empire state building", empireStateBuilding.stories);
console.log("height of empire state building", empireStateBuilding.height);
console.log("area of empire state building", empireStateBuilding.squareFeet);
console.log("eastWestLength of empire state building", empireStateBuilding.eastWestLength);
console.log("northSouthLength of empire state building", empireStateBuilding.northSouthLength);

//Lightning Exercises 2: Use square bracket notation to output the remaining 5 properties to the console. Create 5 variables first with the keys as their values. Use those variables to look up the values.

console.log(empireStateBuilding["cost"], "is the cost");
console.log(empireStateBuilding["address"], "is the address");
console.log(empireStateBuilding["owner"], "is the owner");
console.log(empireStateBuilding["architect"], "is the architect");
console.log(empireStateBuilding["address"], "is the adress");

// let keyAddress = {}
// let keyConstructionDate = {}
// let keyOwner = {}
// let keyArchitecht = {}
// let keyCost = {}



const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "301 Plus Park Blvd Ste. 300, Nashville, TN 37217"
}
// Lightning Exercise 1: Output the names of the part-time instructors followed by the names of the full-time instructors in the console.
console.log(`Part-time instructors are ${nashvilleSoftwareSchool.instructors.partTime}, and the full-time instructors are ${nashvilleSoftwareSchool.instructors.fullTime}`);


// Lightning Exercise 2: Output only Andy and Zoe in the console.
console.log(`Two of our instructors are ${nashvilleSoftwareSchool.instructors.fullTime[4]}, and ${nashvilleSoftwareSchool.instructors.partTime[0]}`);
// you can use ${} to call things as long as you put it inside of ` `




const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

//Practice 
// Output the following value to the console.

//Paul McCartney was in the Beatles from 1960 to 1970. He was born in 1942. He contributed heavily to the Magical Myster Tour Album.

console.log(`${beatles.members[1].name} was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members[1].birth}. He contributed heavily to the ${beatles.albums[3]}`)


//lighting round



    zebraCake = { 
    cakeType: "vanilla",
    icingType: "white",
    seasonal: false,
    stripes: 4,
    designElements: ["stripes"]
};


    santaBrownie = {
    cakeType: "brown",
    icingType: "white",
    seasonal: true,
    stripes: 0,
    designElements: ["flat colors", "santa face"]
};

    christmasTreeCake = {
    cakeType: "vanilla",
    icingType: "white",
    seasonal: true,
    stripes: 3,
    designElements: ["stripes", "green sprinkles", "tree shape"]
};

const littleDebbies = [zebraCake, santaBrownie, christmasTreeCake];

console.log("little Debbie snack cakes that I like are", littleDebbies);