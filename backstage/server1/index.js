const express = require('express');
const express_static = require('express-static');

var server = express();

server.listen(8080);

//router
server.use('/getMsg/', require('./router/msg.js')());

server.use(express_static('./static'));