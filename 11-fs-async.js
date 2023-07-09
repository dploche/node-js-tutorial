const fs = require('fs');

fs.readFile('./content/first.txt','utf8',(err, result) => {
    if(err){
        console.log(err);
        return null;
    }
    console.log(result);
    const first = result;
    fs.readFile('./content/second.txt', 'utf8', (err, result) => {
        if(err){
            console.log(err);
            return null;
        }
        const second = result;
        fs.writeFile('./content/result-async.txt',
        `Here is the result : ${first}, ${second}`,
        {flag : 'a'},
        (err, result) => {
            if(err){
                console.log(err);
                return null;
            }
            console.log(result);
        }
        );
    });
});