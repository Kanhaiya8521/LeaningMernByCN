const { fstat } = require('fs');
const http = require('http');
const fs = require('fs');

const port = 4000;

function requestHandle(req, res){
    console.log(req.url);
    res.writeHead(200, {'content-type' : 'text/html'});
    // res.end('<h1>Gotcha!!</h1>');
    fs.readFile('./index.html', function(err, data) {
        if(err){
            console.log('error', err);
            return res.end('<h1>Error!!</h1>');
        }
        return res.end(data);
    });
}

const server = http.createServer(requestHandle);

server.listen(port, function(err){
    if(err){
        console.log(err);
        return;
    }

    console.log('Server is up and running on port: ', port);
});


// switch(request.url) {
//     case '/home':
//         filePath = './index.html';
//         break;
//     case '/profile':
//         filePath = './profile.html';
//         break;
//     default: 
//         filePath = './404.html';
//     }

// const http = require('http');

// http.createServer((req, res) =>{
//     res.write("Hello this is kanna");
//     res.end();
// }).listen(4500);