var jsonServer = require("json-server");

// returns express server
var server = jsonServer.create();

// default middlewares - logger, statis, cors & no-cache
server.use(jsonServer.defaults());

var router = jsonServer.router("db.json");
server.use(router);

console.log("Listening at 4000");
server.listen(4000);
