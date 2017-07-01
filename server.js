var PORT, app, express, fs, jsonserver, path, proxy, url;

path = require('path');
express = require('express');
jsonserver = require('json-server');
proxy = require('express-http-proxy');
fs = require('fs');
url = require('url');

app = express();
PORT = process.env.PORT || 3000;
process.env.PWD = process.cwd();

app.use('/assets', express["static"](path.join(process.env.PWD, 'assets')));
app.use('/views', express["static"](path.join(process.env.PWD, 'views')));

app.use('/api', proxy('127.0.0.1:8000', {
forwardPath: function(req, res) {
  return '/api' + url.parse(req.url).path;
}
}));


app.listen(PORT, function() {
    return console.log('Listening to ' + PORT);
});
