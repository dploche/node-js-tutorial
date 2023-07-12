// Best async approach

const fs = require('fs');
const util = require('util');
const readFilePromise = util.promisify(fs.readFile);
const writeFilePromise = util.promisify(fs.writeFile);

const start = async() => {
    try {
        const first = await  readFilePromise('./content/first.txt', 'utf-8');
        const second = await readFilePromise('./content/second.txt', 'utf-8');
        await writeFilePromise(
            './content/result-mind-grenade.txt', 
            'THIS IS AWESOME: ' + first + second //Can add flag as third argument
            );
        console.log(first, second);
    } catch (error){
        console.log(error);
    }
}

start();

// This is whats happening in the background || Not ideal approach

// const getText = (path) => {
//     return new Promise((resolve, reject) =>
//     {
//         fs.readFile(path, 'utf-8', (err, data) => {
//             if (err) {
//                 reject(err);
//             } else{
//                 resolve(data);
//             }
//         });
//     });
// };

// getText('./content/first.txt');
// .then((result) => console.log(result))
// .catch((err) => console.log(err));