/*
index.js
*/
"use strict";

let msg = "hello";
console.log(msg);

const resultsDiv = document.getElementById("results");
resultsDiv.innerHTML = "<p>This is from JavaScript from another page</p>";

let aNumber = 7;
let notANumber = "7";

let adding = aNumber + 4;
let addingString = notANumber + 4;

if (notANumber === 7) {
    console.log("7 is 7");
} else {
    console.log("sorry, sucker!");
}

function testMe() {
    var someMsg = "some Meesage";
    console.log (someMsg);
}

testMe();