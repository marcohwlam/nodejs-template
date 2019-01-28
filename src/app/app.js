var express = require('express')
  , app = express()
  , http = require('http')
app.set('port', 3000);
app.use(express.static('./test_result'));
app.use(require('./router'))

http.createServer(app).listen(app.get('port'), function(){
 console.log('Express server listening on port ' + app.get('port'));
});
