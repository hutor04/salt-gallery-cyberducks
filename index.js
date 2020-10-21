const server = require('./server/app.js').app;

port = process.env.PORT || 80

server.listen(port);
