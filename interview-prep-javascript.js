// Write an algorithm to determine whether all characters in a string are unique

var string = "sgring";

// This algorithm is pretty inefficient--it relies on a loop within a loop to check every letter against each letter after it. It runs at o(n^2), which is admittedly pretty bad.

for (i = 0; i < string.length; i++) {
  var letter = string[i];
  for (e = 0; e < string.length; e++ ) {
    if (letter === string[e + 1]) {
      console.log(string[i]);
      console.log("This letter is not unique throughout the string.");
      break;
    } else {
      console.log("This letter is unique.");
    }
  }
}

// Another approach would be to break up the string into an array, sort the array, and only check letters next to one another; this is much more efficient and operates at O(n)

var string = "srings";

newString = string.split("");

newString.sort(); // sorts the characters in alphabetical order, so we only have to use on loop

for (i = 0; i < string.length; i++) {
    if (newString[i] === newString[i++]) {
        console.log("The string does not contain unique characters.");
        break;
    } else {
        console.log("This string contains only unique characters.");
    }
}

// Check permutations; gien two strings, check to see if one is a permutation of the other (an anagram)

// We have two strings

var string1 = "string";

var string2 = "string";

// We have to first make sure they're even the same length

if ( string1.length === string2.length ) {
  // Then we split the strings into an array of individual letters to we can sort the individual arrays
    var string1Split = string1.split("");
    var string2Split = string2.split("");

    // Sorting the arrays
    var string1Sorted = string1Split.sort();
    var string2Sorted = string2Split.sort();

    // Using a loop to compare the letter at each index--the two must always be strictly equal for the two letters to be anagrams
    for (i = 0; i < string1.length; i ++) {
        if (string1Sorted[i] === string2Sorted[i]) {
        } else {
            console.log("The letters don't match");
            break;
        }
        console.log("These are totally anagrams of one another!");
    }

} else {
    console.log("These strings can't be permutations, because they are different lengths.");
}

// URLify a string input by adding "%20" whenever there's a blank space

var string = "My name is Brennan";

var URLify = string.split(" ").join("%20");

// returns "My%20name%20is%20Brennan"

// Check to see if two strings are the same backwards and forwards

string1 = "Brennan";

string2 = "nannerb";

// Remove any white space and make sure the strings are all lowercase (Javascript is case sensitive, so uppercase and lowercase letters are not the same thing)

string1NoSpace = string1.replace(/\s+/g, '').toLowerCase();

string2NoSpace = string2.replace(/\s+/g, '').toLowerCase();

string2Reverse = string2NoSpace.split("").reverse().join("");

// Run a loop to compare the two words. Because we reversed the second word, we can simply compare index to index. Palindromes will also be the same length (because we removed any white space)

if (string1NoSpace.length === string2Reverse.length) {
    console.log("Entering the function to determine palindrome.");
    for (i = 0; i < string1NoSpace.length; i++) {
        if (string1NoSpace[i] === string2Reverse[i]) {
            console.log("The letters at index " + i + " are the same.");
        } else {
            console.log("The two letters are not the same, so these words are not palindromes!");
            break;
        }
    }
}

// Write an alogrithm to make sure that two words are less than two insertions from being the same (still working on this one)

// pale -> ple = true

// check to see if a word is fewer than two transformations away from being correct
// we could perform each operation separately, seeing if the strings match
// keep track of count of operations, and compare it against two once the words are identical

var string = "ple";
var final = "pale";
var transformationCount = 0;

// split second string into an array of individual characters

stringArray = [];

for (i = 0; i < string.length; i++) {
    stringArray.push(string[i]);
}

var finalArray = [];

for (i = 0; i < final.length; i++) {
    finalArray.push(final[i]);
}

// desired string is pale

function updatingString(string, final) {
    if (string === final) {
        console.log("True!");
    } else {
        string.splice(1, 0, "a");
        transformationCount++;
        for (i = 0; i < string.length; i++) {
            if (string[i] === final[i]) {
                console.log("These letters are the same!");
            } else {
                break;
            }
        }
        console.log(transformationCount);
        if (transformationCount < 2) {
            console.log("Yes, these words were less than two insertions from being the same!");
        } else {
            console.log("No, these words were super different!");
        }
        }
}

updatingString(stringArray, finalArray);
