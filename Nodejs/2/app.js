const path = require('path');

const filePath = path.join("files", "student", "data.txt");

console.log(filePath);
console.log(path.basename(filePath));
console.log(path.dirname(filePath));
console.log(path.extname(filePath)); //extension of the file
console.log(path.parse(filePath));  //parse method is used to get the details of the file
console.log(path.resolve(filePath));  //absolute path 
console.log(__dirname); //current directory
console.log(__filename); //current file name