const {readFileSync, writeFileSync} = require('fs')
// const fs= require('fs'); same way of doing it shown above
// fs.readFileSync
console.log('start')
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');

writeFileSync(
    './content/result-sync.txt',
     `Here is the result: ${first}, ${second}`, 
     {flag: 'a'}

);
// this creates a new file called result-sync.txt and writes the content of first and second file into it
console.log('done with this task')
console.log('starting the next one')


