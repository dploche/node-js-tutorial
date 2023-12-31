const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/'){ //Home page
        res.write('Welcome to our home page');
        res.end();
    }
    else if(req.url === '/about'){ //about page
        res.write('Here is our short history');
        res.end();
    }
    else{ //Unknown
        res.write(`
        <h1>Oops!<h1>
        <p>We can't seem to find the page you are looking for</p>
        <a href="/">back home</a>
        `);
        res.end();
    }
});

server.listen(5500); //free port
