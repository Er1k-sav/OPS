// TO INSERT INPUT: set [  const inputRecords = [string]  ]
// TO ENCODE: [  const alphabet  ] = DISTORTED ONE AND VICEVERSA WITH [  const distAlphabet  ] = TRADITIONAL ONE
// TO DECODE: [  const alphabet  ] = TRADITIONAL ONE AND VICEVERSA WITH [  const distAlphabet  ] = DISTORTED ONE
// IF A KEY IS GIVEN: set [  const key  ] = number AND UNCOMMENT LINE: 14, set [const distAlphabet] = ""  AND set [  const alphabet  ] = TRADITIONAL ONE
// IF A NUMBER OF ENCODING OR DECODING ITERATIONS IS SPECIFIED set [  const iterations  ] = number

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const inputRecords = [""];
const key = 0;
const iterations = 1;

var records = [];
var distAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// distAlphabet = alphabet.slice(key) + alphabet.slice(0, key);


for (let i = 0; i < iterations; i++) {
    let j = 0;
    let decoded = ""; 

    for (let i = 0; i < inputRecords[0].length; i++) {
        for (let i = 0; i < distAlphabet.length; i++) {
            if (inputRecords[0][j] == distAlphabet[i]) {
                records.push(i);
                j++;
            }          
        }
        
    }
    for (let i = 0; i < records.length; i++) {
        decoded += alphabet[records[i]];
    }
    
    inputRecords.unshift(decoded);
    console.log(`DECODED STRING: ---> ${decoded} <---`);
    records = [];
}
