const readline = require('readline');
const fs = require('fs');

function decompress(line){
    let letter = line.charAt(0);
    let numbers = parseInt(line.substring(1, line.length));
    let end = "";

    for(let i = 0; i < numbers; i++){
        end += letter;
    }

    return end;
}

const rl = readline.createInterface({
    input: fs.createReadStream('compressed.txt'),
    crlfDelay: Infinity
});

let compressedLines = [];

rl.on('line', (line) => {
    compressedLines.push(line);
});

rl.on('close', () => {
   for(line of compressedLines){
       console.log(decompress(line));
   }
});