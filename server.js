const http = require('http');
const {v4 : uuidv4} = require('uuid');

const server = http.createServer( (req,res) => {

    if(req.method == 'GET' && req.url == '/html'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        
        res.end(`<!DOCTYPE html>
                    <html>
                        <head>
                        </head>
                        <body>
                            <h1>Any fool can write code that a computer can understand. Good programmers write code that humans can understand.</h1>
                            <p> - Martin Fowler</p>
                        </body>
                    </html>`);
    }

    if(req.method == 'GET' && req.url == '/json'){
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify({
            "slideshow": {
              "author": "Yours Truly",
              "date": "date of publication",
              "slides": [
                {
                  "title": "Wake up to WonderWidgets!",
                  "type": "all"
                },
                {
                  "items": [
                    "Why <em>WonderWidgets</em> are great",
                    "Who <em>buys</em> WonderWidgets"
                  ],
                  "title": "Overview",
                  "type": "all"
                }
              ],
              "title": "Sample Slide Show"
            }
        }),null,2);
    }
    if(req.method == 'GET' && req.url == '/uuid'){
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify({UUID : uuidv4()},null,2));
    }

    if(req.method == 'GET' && req.url.includes('status')){
        const code = req.url.split('/')[2];
        res.writeHead(code,{'content-type' : 'text'});
        res.end(code);
    }

    if(req.method == 'GET' && req.url.includes('delay')){
        const delay = req.url.split('/')[2];
        setTimeout( () => {
            res.writeHead(200,{'content-type' : 'text'});
            res.end('hello we are successfully executed');
        },delay*1000)
    }    
});

server.listen(3000, () => {
    console.log('server is running on 3000');
})