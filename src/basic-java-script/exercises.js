/* 49 */
function reusableFunction() {
    console.log("Hi World");
}
reusableFunction();

/* 50 */
function functionWithArgs(num1, num2) {
    console.log(num1 + num2);
}
functionWithArgs(1, 2);

/* 51 */
function timesFive(num1) {
    return 5 * num1;
}
timesFive(5);

/* 52 */
// Declare the myGlobal variable below this line
const myGlobal = 10;

function fun1() {
    // Assign 5 to oopsGlobal Here
    oopsGlobal = 5;
}

// Only change code above this line

function fun2() {
    var output = "";
    if (typeof myGlobal != "undefined") {
        output += "myGlobal: " + myGlobal;
    }
    if (typeof oopsGlobal != "undefined") {
        output += " oopsGlobal: " + oopsGlobal;
    }
    console.log(output);
}

/* 53 */
function myLocalScope() {
    // Only change code below this line
    var myVar = 10;
    console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);

/* 54 */
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
    // Only change code below this line
    return "sweater";
    // Only change code above this line
    return outerWear;
}

myOutfit();

/* 55 */
// Setup
let sum = 0;

function addThree() {
    sum = sum + 3;
}

// Only change code below this line

function addFive() {
    sum += 5;
}

// Only change code above this line

addThree();
addFive();

/* 56 */
// Setup
let processed = 0;

function processArg(num) {
    return (num + 3) / 5;
}

// Only change code below this line
processed = processArg(7);

/* 57 */
function nextInLine(arr, item) {
    // Only change code below this line
    arr.push(item);
    return arr.shift();
    // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

/* 59 */
function trueOrFalse(wasThatTrue) {
    // Only change code below this line
    if (wasThatTrue) {
        return "Yes, that was true";
    } else {
        return "No, that was false";
    }
    // Only change code above this line

}

/* 60 */
// Setup
function testEqual(val) {
    if (val == 12) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testEqual(10);

/* 61 */
// Setup
function testStrict(val) {
    if (val === 7) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

testStrict(10);

/* 62 */
// Setup
function compareEquality(a, b) {
    if (a === b) { // Change this line
        return "Equal";
    }
    return "Not Equal";
}

compareEquality(10, "10");

/* 63 */
// Setup
function testNotEqual(val) {
    if (val != 99) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testNotEqual(10);

/* 64 */
// Setup
function testStrictNotEqual(val) {
    if (val !== 17) { // Change this line
        return "Not Equal";
    }
    return "Equal";
}

testStrictNotEqual(10);

/* 65 */
function testGreaterThan(val) {
    if (val > 100) {  // Change this line
        return "Over 100";
    }

    if (val > 10) {  // Change this line
        return "Over 10";
    }

    return "10 or Under";
}

testGreaterThan(10);

/* 74 */
function testSize(num) {
    // Only change code below this line
    if (num < 5) {
        return "Tiny";
    } else if (num < 10) {
        return "Small";
    } else if (num < 15) {
        return "Medium";
    } else if (num < 20) {
        return "Large";
    } else {
        return "Huge";
    }
    // Only change code above this line
}

testSize(7);

/* 75 */
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
    // Only change code below this line
    if (strokes == 1) {
        return names[0];
    } else if (strokes >= par + 3) {
        return names[6];
    } else if (strokes == par + 2) {
        return names[5];
    } else if (strokes == par + 1) {
        return names[4];
    } else if (strokes == par) {
        return names[3];
    } else if (strokes == par - 1) {
        return names[2];
    } else {
        return names[1];
    }
    // Only change code above this line
}

golfScore(5, 4);

/* 76 */
function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line  
    switch (val) {
        case 1:
            answer = "alpha";
            break;
        case 2:
            answer = "beta";
            break;
        case 3:
            answer = "gamma";
            break;
        case 4:
            answer = "delta";
            break;
    }
    // Only change code above this line
    return answer;
}

caseInSwitch(1);

/* 77 */
function switchOfStuff(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case "a":
            answer = "apple";
            break;
        case "b":
            answer = "bird";
            break;
        case "c":
            answer = "cat";
            break;
        default:
            answer = "stuff";
            break;
    }
    // Only change code above this line
    return answer;
}

switchOfStuff(1);

/* 78 */
function sequentialSizes(val) {
    let answer = "";
    // Only change code below this line
    switch (val) {
        case 1:
        case 2:
        case 3:
            answer = "Low";
            break;
        case 4:
        case 5:
        case 6:
            answer = "Mid";
            break;
        case 7:
        case 8:
        case 9:
            answer = "High";
            break;
    }
    // Only change code above this line
    return answer;
}

sequentialSizes(1);

/* 79 */
function chainToSwitch(val) {
    let answer = "";
    // Only change code below this line  
    switch (val) {
        case "bob":
            answer = "Marley";
            break;
        case 42:
            answer = "The Answer";
            break;
        case 1:
            answer = "There is no #1";
            break;
        case 99:
            answer = "Missed me by this much!";
            break;
        case 7:
            answer = "Ate Nine";
            break;
    }
    // Only change code above this line
    return answer;
}

chainToSwitch(7);

/* 80 */
function isLess(a, b) {
    // Only change code below this line
    return a < b;
    // Only change code above this line
}

isLess(10, 15);

/* 81 */
// Setup
function abTest(a, b) {
    // Only change code below this line
    if (a < 0 || b < 0) return undefined;
    // Only change code above this line

    return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

abTest(2, 2);

/* 82 */
let count = 0;

function cc(card) {
    // Only change code below this line
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
        default:
            break;
    }

    if (count < 1)
        return count + " " + "Hold";
    else
        return count + " " + "Bet";
    // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');

/* 83 */
const myDog = {
    // Only change code below this line
    name: "Tommy",
    legs: 4,
    tails: 1,
    friends: ["ABC", "123"]
    // Only change code above this line
};

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/using-objects-for-lookups */
// Setup
function phoneticLookup(val) {
    let result = "";
    // Only change code below this line
    const lookup = {
        "alpha": "Adams",
        "bravo": "Boston",
        "charlie": "Chicago",
        "delta": "Denver",
        "echo": "Easy",
        "foxtrot": "Frank"
    }
    result = lookup[val];
    // Only change code above this line
    return result;
}

phoneticLookup("charlie");

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/accessing-nested-objects */
const myStorage = {
    "car": {
        "inside": {
            "glove box": "maps",
            "passenger seat": "crumbs"
        },
        "outside": {
            "trunk": "jack"
        }
    }
};

const gloveBoxContents = myStorage.car.inside["glove box"];

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/record-collection */
// Setup
const recordCollection = {
    2548: {
        albumTitle: 'Slippery When Wet',
        artist: 'Bon Jovi',
        tracks: ['Let It Rock', 'You Give Love a Bad Name']
    },
    2468: {
        albumTitle: '1999',
        artist: 'Prince',
        tracks: ['1999', 'Little Red Corvette']
    },
    1245: {
        artist: 'Robert Palmer',
        tracks: []
    },
    5439: {
        albumTitle: 'ABBA Gold'
    }
};

// Only change code below this line
function updateRecords(records, id, prop, value) {
    // record does not exist.
    if (!records.hasOwnProperty(id)) {
        return records;
    }

    // invalid value. delete record prop.
    if (value === "") {
        delete records[id][prop];
        return records;
    }

    // record prop exist. update it.
    if (records[id].hasOwnProperty(prop)) {
        switch (prop) {
            case 'albumTitle':
            case 'artist':
                records[id][prop] = value;
                break;
            case 'tracks':
                records[id][prop].push(value);
                break;
        }

        return records;
    }

    // add record prop and set value.
    switch (prop) {
        case 'albumTitle':
            records[id].albumTitle = value;
            break;
        case 'artist':
            records[id].artist = value;
            break;
        case 'tracks':
            records[id].tracks = [value];
            break;
    }

    return records;
}

updateRecords(recordCollection, 5439, 'artist', 'ABBA');

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/iterate-odd-numbers-with-a-for-loop */
// Setup
const myArray = [];

// Only change code below this line
for (let i = 1; i < 10; i++) {
    if (i % 2 !== 0) {
        myArray.push(i);
    }
}

console.log(myArray);

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/nesting-for-loops */
function multiplyAll(arr) {
    let product = 1;
    // Only change code below this line
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            product *= arr[i][j];
        }
    }

    console.log(product);
    // Only change code above this line
    return product;
}

multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/replace-loops-using-recursion */
function sum(arr, n) {
    // Only change code below this line
    if (n <= 0) {
        return 0;
    }

    return sum(arr, n - 1) + arr[n - 1];
    // Only change code above this line
}

sum([2, 3, 4, 5], 3);

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/profile-lookup */
// Setup
const contacts = [
    {
        firstName: "Akira",
        lastName: "Laine",
        number: "0543236543",
        likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
        firstName: "Harry",
        lastName: "Potter",
        number: "0994372684",
        likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
        firstName: "Sherlock",
        lastName: "Holmes",
        number: "0487345643",
        likes: ["Intriguing Cases", "Violin"],
    },
    {
        firstName: "Kristian",
        lastName: "Vos",
        number: "unknown",
        likes: ["JavaScript", "Gaming", "Foxes"],
    },
];

function lookUpProfile(name, prop) {
    // Only change code below this line
    let contactExist = false;
    let propExist = false;
    for (let i = 0; i < contacts.length; i++) {
        contactExist = contacts[i].firstName === name;
        propExist = contacts[i].hasOwnProperty(prop);
        if (contactExist && propExist) {
            return contacts[i][prop];
        }
        if (contactExist && !propExist) {
            return "No such property";
        }
    }

    if (!contactExist) {
        return "No such contact";
    }

    return "Invalid name or prop.";
    // Only change code above this line
}

lookUpProfile("Akira", "likes");

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-with-javascript */
function randomWholeNum() {

    // Only change code below this line

    return Math.floor(Math.random() * 10);
}

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/generate-random-whole-numbers-within-a-range */
function randomRange(myMin, myMax) {
    // Only change code below this line 
    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin
    // Only change code above this line
}

console.log(randomRange(1, 50));
console.log(randomRange(1, 50));
console.log(randomRange(1, 50));

/*  */
function convertToInteger(str) {
    return parseInt(str);
}

console.log(convertToInteger("56"));

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-the-conditional-ternary-operator */
function checkEqual(a, b) {
    return a === b ? "Equal" : "Not Equal";
}

console.log(checkEqual(1, 2));
console.log(checkEqual(1, 1));

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-multiple-conditional-ternary-operators */
function checkSign(num) {
    return num < 0 ? 'negative'
        : num > 0 ? 'positive'
            : 'zero';
}

console.log(checkSign(-1));
console.log(checkSign(0));
console.log(checkSign(1));

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-countdown */
// Only change code below this line
function countdown(n) {
    if (n < 1) {
        return [];
    } else {
        const numbers = countdown(n - 1);
        numbers.unshift(n);
        return numbers;
    }
}

console.log(countdown(5));
// Only change code above this line

/* https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/use-recursion-to-create-a-range-of-numbers */
function rangeOfNumbers(start, end) {
    if (end < start) {
        return [];
    } else {
        const range = rangeOfNumbers(start, end - 1);
        range.push(end);
        return range;
    }
};

console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(-5, -1));
