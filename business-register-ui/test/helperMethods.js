var fs = require('fs');
var html5Lint = require('html5-lint');

function testHtml(filePath) {
  fs.readFile(filePath, 'utf8', function(err, html) {
    if (err) throw err;
    let htmlErr = false;

    html5Lint(html, function(err, results) {
      results.messages.forEach(function(msg) {
        var type = msg.type // error or warning
        var message = msg.message;
        var lineNumber = msg.lastLine;
        if (type === 'error') {
          htmlErr = true;
          console.error(`HTML5 Lint [${type}] on line [${lineNumber}]: ${message}`);
        } else {
          console.info(`HTML5 Lint [${type}] on line [${lineNumber}]: ${message}`);
        }
      });
      if (htmlErr) throw Error(`Errors present in ${filePath} file.`);
    });
  });
}

module.exports = testHtml;
