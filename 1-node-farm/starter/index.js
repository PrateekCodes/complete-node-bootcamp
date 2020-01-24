const fs = require("fs");

//Blocking, synchronous ways
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");

// console.log(textIn);

// const date = new Date(Date.now()).toDateString();

// const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${date}`;

// fs.writeFileSync("./txt/output.txt", textOut);
// console.log("File written!");

//Non-blocking, asynchronous way
fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("Will read file!");
