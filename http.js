const http = require('http');
const server = http.createServer((req,res)=>{
    if (req.url === '/'){
        res.write('Hello world');
        res.end();
    }
    if (req.url === '/zhouyiteng'){
        res.write('Hello zhouyiteng');
        res.end();
    }
    if (req.url === '/json'){
        res.write(JSON.stringify([1,2,3]));
        res.end();
    }
}); //server is based on EventEmitter

server.on('connection', (socket)=>{
    console.log('New connection...');
});

server.listen(3000);

console.log('Listening on port 3000...')