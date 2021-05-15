const fs=require("fs");
const file = fs.readFileSync(".helloworld.txt",{encoding:'utf-8'});
const stringify = require("csv-stringify/lib/sync")
const table = [
    ["name", "job"],
    ["chicken", "program dog"]
]
fs.writeFileSync("Chicken.csv",stringif(table));
console.log(file);
for (let i = 0; i < 10; i++)
    console.log("Hello World")