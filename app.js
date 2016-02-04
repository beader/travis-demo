var express   = require('express');
var fibonacci = require('./fibonacci');

var app = express();

app.get('/fib', function(req, res) {
    var n = parseInt(req.query.n);
    try {
        console.log(fibonacci(n));
        res.send(String(fibonacci(n)));
    } catch (e) {
        res.status(500).send(e.message);
    }
});

module.exports = app;

app.listen(3000, function() {
    console.log('app is listening at port 3000');
});
