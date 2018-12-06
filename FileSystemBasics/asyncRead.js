const fs = require("fs");

const filename = "todo.txt";

console.log(`Entire content of ${filename} will be read synchronously.`);
let content = fs.readFile(filename, {encoding: "utf-8"}, (err,data) => {
    if(err) {
        console.error(err.message);
    }
    else {
        console.log(`Reading ${filename} finished successfully.`)
        console.log();
        console.log(`Content of ${filename}:`);
        console.log(data);
    }

});

console.log(`Meanwhile Node.js app couldn't do anything else.
...`);