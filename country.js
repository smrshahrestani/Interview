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
 * Complete the 'getPhoneNumbers' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. STRING country
 *  2. STRING phoneNumber
 * API URL: https://jsonmock.hackerrank.com/api/countries?name=<country>
 */

var axios = require( "axios" ); 
const API = "https://jsonmock.hackerrank.com/api/countries?name=";

const print = function(a){console.log(a)}

async function getPhoneNumbers(country, phoneNumber) {
    
    // gets the country code by passing the name of the country
    let countryCode = await getCountryCode(country)
    if (countryCode == -1) {
        return -1
    }
    else {
        let finalPhoneNumber = "+" + countryCode + " " + phoneNumber;
        return finalPhoneNumber;    
    }
}

// This function returns the country code or -1 if there is no data
async function getCountryCode(country){
    const URL = API+country;
    let allData = await axios.get(URL);
    let narrowData = await allData.data;
    let countryCodes = narrowData.data;
    
    if (typeof countryCodes !== 'undefined' && countryCodes.length === 0){
        return -1;
    }
    else{
        let countryCode = countryCodes[0].callingCodes.slice(-1)[0];
            return countryCode;   
    }
}

async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const country = readLine();

    const phoneNumber = readLine();

    const result = await getPhoneNumbers(country, phoneNumber);

    ws.write(result + '\n');

    ws.end();
}
