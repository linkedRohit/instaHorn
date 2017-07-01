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

app.use('/api', proxy('127.0.0.1:8000', {
forwardPath: function(req, res) {
  return '/api' + url.parse(req.url).path;
}
}));

app.get('*', function(req, res) {
    var file, filepath, htmlpath;

    file = url.parse(req.url).pathname;
    if (!file.endsWith('.html')) {
      file += '.html';
    }

    htmlpath = path.join(process.env.PWD, 'views');
    filepath = path.join(htmlpath, file);

    if (fs.existsSync(filepath)) {
      return res.sendFile(filepath);
    } else {
      return res.sendFile(path.join(htmlpath, 'index.html'));
    }

});

app.listen(PORT, function() {
    return console.log('Listening to ' + PORT);
});
