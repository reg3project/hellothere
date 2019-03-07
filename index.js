console.log("hello world")
const fs = require("fs")
const fileContent = fs.readFileSync("./1.txt")
console.log(fileContent.toString());
