var express = require('express');
var SERVER_PORT = process.env.PORT || 9000;

exports.run = function (config) {
  var app = express();
  app.use("/", express.static("./static"));
  app.listen(SERVER_PORT);
};

//If server.js is called directly (i.e. in Procfile), run production server
if (require.main === module) {
  exports.run();
}
