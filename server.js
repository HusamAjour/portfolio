const express = require('express');
const server = express();
server.use(express.static('./public'));
const PORT = process.env.PORT || 3000;

server.get('/test', (request, response) => {
    console.log('test route');
    response.send('your test route is working');
});

server.get('/people', (request, response) => {
    let family =['name1', 'name2'];
    response.json(family);
});

server.listen(PORT, () => {
    console.log(`Listning to port ${PORT}`);
});