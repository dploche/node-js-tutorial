//const {readFilesync, writeFilesync} = require('fs');
const fs = require('fs');

const first = fs.readFileSync('./content/first.txt','UTF-8');
const second = fs.readFileSync('./content/second.txt','UTF-8');

console.log(first, second);
//Overwrite or create
fs.writeFileSync('./content/result-sync.txt',
`Here is the result : ${first}, ${second}`
);
//Append
fs.writeFileSync('./content/result-sync.txt',
`Here is the result : ${first}, ${second}`,
{flag : 'a'}
);