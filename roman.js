'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}



/*
 * Complete the 'sortRoman' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY names as parameter.
 */

const romanNumbers = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50]
]);

// This function converts Roman numbers to integers
function romanToInt(string) {
  let result = 0,
    current, previous = 0;
  for (const char of string.split("").reverse()) {
    current = romanNumbers.get(char);
    if (current >= previous) {
      result += current;
    } else {
      result -= current;
    }
    previous = current;
  }
  return result;
}

// This function sorts based on the alphabetic order
function alphabeticalOrder(arr) {
    let sorted = arr.sort((a, b) => a < b ? -1 : 1)
    return sorted;
}

// This function splits the names from the Roman numbers and 
// stores them as a list of objects
function splitNames(arr) {
    let listOfObj = []
    for(let i = 0; i < arr.length ; i ++){
        let sp = arr[i].split(" ");
        listOfObj.push({name: sp[0], number: sp[1]});
    }
    return listOfObj;
}

// This function sorts the names according to both names and numbers
function finalSort(arr){
    let final = []
    
    arr.sort(function(a, b) {
        let aInt = romanToInt(a.number);
        let bInt = romanToInt(b.number);
        let result = ((a.name < b.name) ? -1 : ((a.name == b.name) ? (aInt - bInt) : 1));
        return result
    });
    
    for (var i = 0; i<arr.length; i++) {
        final.push(arr[i].name + " " + arr[i].number);
    }
    return final;
}


function sortRoman(names) {
    let final = finalSort(splitNames(names))
    return final
}



function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const namesCount = parseInt(readLine().trim(), 10);

    let names = [];

    for (let i = 0; i < namesCount; i++) {
        const namesItem = readLine();
        names.push(namesItem);
    }

    const result = sortRoman(names);

    ws.write(result.join('\n') + '\n');

    ws.end();
}
